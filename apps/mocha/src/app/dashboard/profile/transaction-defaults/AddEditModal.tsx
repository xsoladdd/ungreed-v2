"use client";
import { Button } from "@/components/ui/button";
import {
  BasicDialogFooter,
  BasicDialogHeader,
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";

import InputWrapper from "@/components/ui/InputWrapper";
import Select from "@/components/ui/Select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  useInsertDefaultLedgerTransactionMutation,
  useUpdateDefaultLedgerTransactionsByPkMutation,
} from "@/graphql/client.generated";
import { useZustand } from "@/store";
import { useFormik } from "formik";
import { addEditModalType, formSchema } from "./helper";

const AddEditModal: React.FC<addEditModalType> = ({
  setStatus,
  status,
  item,
}) => {
  // const [status, setstatus] = useToggle(false);
  const MODE: "add" | "edit" = typeof item !== "undefined" ? "edit" : "add";
  const title = MODE === "add" ? `ADD NEW RECORD` : `EDIT RECORD # ${item?.id}`;
  const { user, refetch } = useZustand();
  const { toast } = useToast();

  const [insertDefaultLedgerTransaction, { loading: insertLoading }] =
    useInsertDefaultLedgerTransactionMutation({});

  const [updateDefaultLedgerTransaction, { loading: updateLoading }] =
    useUpdateDefaultLedgerTransactionsByPkMutation({});
  const loading = insertLoading || updateLoading;

  function successCall() {
    setStatus(false);
    formik.resetForm();
    refetch.setter("defaultLedgerItems", true);
  }

  const formik = useFormik({
    initialValues: {
      transactionType: item?.transaction_type ?? "-",
      cutoff: item?.cutoff ?? "1st",
      description: item?.description ?? "",
      amount: item?.amount ?? "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      const { amount, cutoff, description, transactionType } = values;
      if (user.id) {
        if (MODE === "add") {
          insertDefaultLedgerTransaction({
            variables: {
              object: {
                amount: typeof amount === "string" ? parseInt(amount) : amount,
                cutoff: cutoff,
                description,
                transaction_type: transactionType,
                user_id: user.id,
              },
            },
            onCompleted: (data) => {
              successCall();
              toast({
                title: "Succesfully Added Record",
                description: `successfully added ${data.insert_default_ledger_transactions_one?.description}`,
              });
            },
            onError: () => {
              successCall();
              toast({
                title: "Something went wrong",
                description: `Failed adding new record`,
                variant: "destructive",
              });
            },
          });
        }
        if (MODE === "edit") {
          updateDefaultLedgerTransaction({
            variables: {
              pkColumns: {
                id: item?.id ?? 0,
              },
              set: {
                amount: typeof amount === "string" ? parseInt(amount) : amount,
                cutoff: cutoff,
                description,
                transaction_type: transactionType,
                user_id: user.id,
              },
            },
            onCompleted: (data) => {
              successCall();
              toast({
                title: `Succesfully Saved`,
                description: `Record # ${data.update_default_ledger_transactions_by_pk?.id} has been succesfully saved`,
              });
            },
            onError: (e) => {
              successCall();
              console.error(e);
              toast({
                title: "Something went wrong",
                description: `Failed editing new record`,
                variant: "destructive",
              });
            },
          });
        }
      }
    },
  });
  const disableForm = false;

  const footer = (
    <BasicDialogFooter
      error={
        (formik.touched.amount || formik.touched.description) &&
        (formik.errors.amount || formik.errors.description)
      }
      primaryButton={{
        // onClick: () => console.log("aw"),
        disabled: loading,
      }}
      resetButton={{
        onClick: formik.handleReset,
        disabled: loading,
      }}
    />
  );
  const content = (
    <div className="grid  py-4">
      <InputWrapper label="Description" className="py-2" htmlFor="description">
        <Textarea
          disabled={disableForm}
          onChange={formik.handleChange}
          value={formik.values.description}
          id="description"
          name="description"
          tabIndex={0}
        />
      </InputWrapper>
      <InputWrapper label="Amount" className="py-2" htmlFor="amount">
        <Input
          disabled={disableForm}
          name="amount"
          type="text"
          onKeyDown={(e) =>
            ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
          }
          autoComplete="off"
          onChange={(e) =>
            formik.setFieldValue(
              "amount",
              e.currentTarget.value.replace(/[^0-9]/g, "")
            )
          }
          value={formik.values.amount}
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
            onValueChange={(e) => formik.setFieldValue("transactionType", e)}
            value={formik.values.transactionType}
            name="transaction"
          />
        </InputWrapper>
        <InputWrapper label="Cutoff" className="py-2" htmlFor="cutoff">
          <Select
            options={[
              { text: "First", value: "1st" },
              { text: "Second", value: "2nd" },
            ]}
            disabled={disableForm}
            onValueChange={(e) => formik.setFieldValue("cutoff", e)}
            value={formik.values.cutoff}
            name="cutoff"
          />
        </InputWrapper>
      </div>
    </div>
  );
  return (
    <>
      <Dialog
        modal
        open={status}
        onOpenChange={(status) => {
          if (status) {
            formik.resetForm();
          }
          setStatus(status);
        }}
      >
        <DialogContent
          className="sm:max-w-[425px]"
          onCloseAutoFocus={(x) => console.log(x)}
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <BasicDialogHeader title={title} />
          <form onSubmit={formik.handleSubmit}>
            {content}
            {footer}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddEditModal;
