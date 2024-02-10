"use client";
import AlertDialog from "@/components/ui/AlertDialog";
import Card from "@/components/ui/Card";
import InputWrapper from "@/components/ui/InputWrapper";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useInserTransactionMutation } from "@/graphql/client.generated";
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
  } = useZustand();
  const [insertTransaction] = useInserTransactionMutation();
  const [alertStatus, toggleAlert] = useToggle(false);
  const { toast } = useToast();

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
      if (MODE === "add") {
        if (!selectedLedger || !selectedLedger.id) {
          console.error("no selected ledger id");
        }
        setLedgerStatus("loading");
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
            toast({
              title: "Transaction Succesfully Added",
              description: `${data.insert_transaction_one?.description} succesfully added `,
            });
          },
        });
      }
    },
  });

  const MODE = selectedTransaction ? "edit" : "add";

  useEffect(() => {
    if (selectedTransaction) {
      const { amount, transaction_type, description } = selectedTransaction;
      formik.setFieldValue("transactionType", transaction_type);
      formik.setFieldValue("amount", (amount ? amount : 0).toString());
      formik.setFieldValue("description", description ?? "");
    }
  }, [selectedTransaction?.id]);

  const disableForm =
    formik.isSubmitting || ledgerFetchStatus !== "with record";

  return (
    <>
      <AlertDialog
        title="UNSAVE CHANGES"
        isOpen={alertStatus}
        handleCancel={() => toggleAlert(false)}
        handleSubmit={() => {
          toggleAlert(false);
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

          <div className="flex justify-between py-4 gap-2">
            <span className="text-sm text-red-400 ">
              {formik.errors.amount || formik.errors.description}
            </span>
            <div className="flex gap-4">
              {" "}
              <Button
                size="sm"
                className="w-full sm:w-fit"
                type="button"
                disabled={disableForm}
                onClick={() => toggleAlert(true)}
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
