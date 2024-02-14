"use client";
import AlertDialog from "@/components/ui/AlertDialog";
import Card from "@/components/ui/Card";
import InputWrapper from "@/components/ui/InputWrapper";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  useInserTransactionMutation,
  useUpdateTransactionMutation,
} from "@/graphql/client.generated";
import useToggle from "@/hooks/useToggle";
import { useZustand } from "@/store";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddEditCard: React.FC = () => {
  const {
    ledgerFetchStatus,
    selectedTransaction,
    selectedLedger,
    addLedgerTransaction,
    setLedgerStatus,
    updateLedgerTransaction,
    deleteLedgerTransaction,
  } = useZustand();
  const [insertTransaction] = useInserTransactionMutation();
  const [updateTransaction, { loading: updateTransactionLoading }] =
    useUpdateTransactionMutation();
  const [overlapAlertStatus, toggleOverlapAlert] = useToggle(false);
  const [deleteAlertStatus, toggleDeleteAlert] = useToggle(false);
  const { toast } = useToast();

  const MODE = selectedTransaction ? "edit" : "add";

  const formik = useFormik({
    initialValues: {
      transactionType: "-",
      description: "",
      amount: "",
    },
    validationSchema: Yup.object({
      transactionType: Yup.string()
        .oneOf(["+", "-"] as const)
        .defined(),
      description: Yup.string()
        .min(2, "Description must be 2 characters or more")
        .max(20, "Description must be 20 characters or less")
        .required("Description is required"),
      amount: Yup.number()
        .min(1, "Amount must not have value lessthan 1")
        .required("Amount is required"),
    }),
    onSubmit: (values) => {
      if (!selectedLedger || !selectedLedger.id) {
        console.error("no selected ledger id");
        toast({
          title: "Something went wrong",
          description: `No selected ledger id`,
          variant: "destructive",
        });
      }
      setLedgerStatus("loading");
      if (MODE === "add") {
        insertTransaction({
          variables: {
            input: {
              amount: parseInt(values.amount),
              transaction_type: values.transactionType,
              description: values.description,
              ledger_id: selectedLedger?.id,
            },
          },
          onCompleted: (data) => {
            addLedgerTransaction({ ...data.insert_transaction_one });
            formik.resetForm();
            toast({
              title: "Transaction Succesfully Added",
              description: `${data.insert_transaction_one?.description} succesfully added `,
            });
          },
          onError: () => {
            toast({
              title: "Something went wrong",
              description: `Error with adding transaction on ledger #${selectedLedger?.id}`,
              variant: "destructive",
            });
          },
        });
      }
      if (MODE === "edit") {
        if (selectedTransaction?.id) {
          updateTransaction({
            variables: {
              pkColumns: {
                id: selectedTransaction?.id ?? 0,
              },
              set: {
                amount: parseInt(values.amount),
                description: values.description,
                transaction_type: values.transactionType,
              },
            },
            onCompleted: (data) => {
              if (selectedTransaction?.id !== undefined) {
                updateLedgerTransaction(selectedTransaction.id, {
                  ...data.update_transaction_by_pk,
                });
                formik.resetForm();
                toast({
                  title: "Update Succesfully",
                  description: `The update for #${selectedTransaction.id} has been completed.`,
                });
              }
            },
            onError: () => {
              toast({
                title: "Something went wrong",
                description: `Error with updating transaction #${selectedTransaction?.id}`,
                variant: "destructive",
              });
            },
          });
        } else {
          toast({
            title: "Something went wrong",
            description: `No Transaction ID found`,
            variant: "destructive",
          });
        }
      }
    },
  });
  useEffect(() => {
    if (selectedTransaction) {
      const { amount, transaction_type, description } = selectedTransaction;
      formik.setFieldValue("transactionType", transaction_type);
      formik.setFieldValue("amount", (amount ? amount : 0).toString());
      formik.setFieldValue("description", description ?? "");
    }
  }, [selectedTransaction?.id]);

  const disableForm =
    formik.isSubmitting ||
    ledgerFetchStatus !== "with record" ||
    selectedLedger?.lock === true;

  return (
    <>
      <AlertDialog
        title="UNSAVE CHANGES"
        isOpen={overlapAlertStatus}
        handleCancel={() => toggleOverlapAlert(false)}
        variant="destructive"
        handleSubmit={() => {
          toggleOverlapAlert(false);
          toast({
            title: "Unsave Changes dismissed",
            description: `Your usave changes with the form is not saved and disregarded`,
          });
          formik.resetForm();
        }}
      >
        Resetting the form will discard any unsaved changes. Are you sure you
        want to proceed?
      </AlertDialog>

      <AlertDialog
        title={`DELETE TRANSACTION`}
        isOpen={deleteAlertStatus}
        loading={updateTransactionLoading}
        handleCancel={() => toggleDeleteAlert(false)}
        handleSubmit={() => {
          updateTransaction({
            variables: {
              pkColumns: {
                id: selectedTransaction?.id as number,
              },
              set: {
                is_deleted: true,
              },
            },
            onCompleted: () => {
              if (selectedTransaction?.id !== undefined) {
                toggleDeleteAlert(false);
                toast({
                  title: "Delete Succesful",
                  description: `Transaction #${selectedTransaction.id}} has been deleted succesfully`,
                });
                deleteLedgerTransaction(selectedTransaction.id);
                formik.resetForm();
                return;
              }
              toast({
                title: "Something went wrong",
                description: `No selected transaction id `,
                variant: "destructive",
              });
            },
            onError: () => {
              toggleDeleteAlert(false);
              toast({
                title: "Something went wrong",
                description: `Failed to delete transaction #${selectedTransaction?.id}} `,
                variant: "destructive",
              });
            },
          });
        }}
        variant="destructive"
      >
        Are you sure that you want delete this transaction?
        <div className="flex flex-col pt-4">
          <span>Transaction #: {selectedTransaction?.id}</span>
          <span>Description: {selectedTransaction?.description}</span>
          <span>Amount:: {selectedTransaction?.amount}</span>
        </div>
      </AlertDialog>
      <Card
        title={MODE === "add" ? "Add Transaction" : " Edit Transaction"}
        sub={
          MODE === "add"
            ? "Create new transaction"
            : `Editing transaction: #${selectedTransaction?.id}`
        }
        className="w-full lg:w-5/12"
      >
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <InputWrapper
            label="Description"
            className="py-2"
            htmlFor="description"
          >
            <Textarea
              disabled={disableForm}
              onChange={formik.handleChange}
              value={formik.values.description}
              id="description"
              name="description"
              tabIndex={0}
            />
          </InputWrapper>

          <div className="flex flex-col md:flex-row gap-4">
            <InputWrapper
              label="Transaction"
              className="py-2"
              htmlFor="transaction"
            >
              <Select
                options={[
                  { text: "Expense", value: "-" },
                  { text: "Income", value: "+" },
                ]}
                disabled={disableForm}
                onValueChange={(e) =>
                  formik.setFieldValue("transactionType", e)
                }
                value={formik.values.transactionType}
                name="transaction"
              />
            </InputWrapper>
            <InputWrapper label="Amount" className="py-2" htmlFor="amount">
              <Input
                disabled={disableForm}
                name="amount"
                type="text"
                onKeyDown={(e) =>
                  ["e", "E", "+", "-", "."].includes(e.key) &&
                  e.preventDefault()
                }
                onChange={(e) =>
                  formik.setFieldValue(
                    "amount",
                    e.currentTarget.value.replace(/[^0-9]/g, "")
                  )
                }
                value={formik.values.amount}
              />
            </InputWrapper>
          </div>
          <span className="text-sm text-red-400 ">
            {(formik.touched.amount || formik.touched.description) &&
              (formik.errors.amount || formik.errors.description)}
          </span>
          <div className="flex justify-between py-4 gap-2">
            <div className="">
              {MODE === "edit" && (
                <Button
                  size="sm"
                  className="w-full sm:w-fit"
                  type="button"
                  disabled={disableForm}
                  onClick={() => toggleDeleteAlert(true)}
                  variant={"destructive"}
                >
                  {"Delete Record"}
                </Button>
              )}
            </div>
            <div className="flex gap-4">
              <Button
                size="sm"
                className="w-full sm:w-fit"
                type="button"
                disabled={
                  disableForm ||
                  (!formik.values.amount && !formik.values.description)
                }
                onClick={() => toggleOverlapAlert(true)}
                variant={"outline"}
              >
                {"Reset"}
              </Button>
              <Button
                size="sm"
                className="w-full sm:w-fit"
                type="submit"
                disabled={disableForm}
              >
                {formik.isSubmitting ? "Loading" : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};
export default AddEditCard;
