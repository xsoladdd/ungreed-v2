import InputWrapper from "@/components/ui/InputWrapper";
import Select from "@/components/ui/Select";
import {
  BasicDialogFooter,
  BasicDialogHeader,
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Transaction,
  useInserTransactionMutation,
  useUpdateTransactionMutation,
} from "@/graphql/client.generated";
import { useZustand } from "@/store";
import { useFormik } from "formik";
import { addEditTransactionSchema } from "../helper";
import { useEffect, useRef } from "react";
interface AddEditTransactionProps {
  status: boolean;
  setStatus: (b: boolean) => void;
  transaction?: Transaction;
}

const AddEditTransaction: React.FC<AddEditTransactionProps> = ({
  setStatus,
  status,
  transaction,
}) => {
  const MODE: "add" | "edit" =
    typeof transaction !== "undefined" ? "edit" : "add";
  const title =
    MODE === "add" ? `ADD NEW RECORD` : `EDIT RECORD #  ${transaction?.id}`;
  // const loading = false;
  const {
    user,
    ledger: { selectedLedger, addLedgerTransaction, updateLedgerTransaction },
  } = useZustand();
  const { toast } = useToast();

  const [insertTransaction, { loading: insertLoading }] =
    useInserTransactionMutation();
  const [updateTransaction, { loading: updateTransactionLoading }] =
    useUpdateTransactionMutation();

  const loading = insertLoading || updateTransactionLoading;
  const formik = useFormik({
    initialValues: {
      transactionType: transaction?.transaction_type ?? "-",
      description: transaction?.description ?? "",
      amount: transaction?.amount ?? "",
    },
    validationSchema: addEditTransactionSchema,
    onSubmit: (values) => {
      if (!selectedLedger || !selectedLedger.id) {
        console.error("no selected ledger id");
        toast({
          title: "Something went wrong",
          description: `No selected ledger id`,
          variant: "destructive",
        });
      }
      const amount =
        typeof values.amount !== "number"
          ? parseInt(values.amount)
          : values.amount;
      if (user.id) {
        if (MODE === "add") {
          insertTransaction({
            variables: {
              input: {
                amount,
                transaction_type: values.transactionType,
                description: values.description,
                ledger_id: selectedLedger?.id,
              },
            },
            onCompleted: (data) => {
              addLedgerTransaction({ ...data.insert_transaction_one });
              formik.resetForm();
              setStatus(false);
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
          if (!transaction?.id) {
            toast({
              title: "Something went wrong",
              description: `No Transaction ID found`,
              variant: "destructive",
            });
          }
          updateTransaction({
            variables: {
              pkColumns: {
                id: transaction?.id ?? 0,
              },
              set: {
                amount,
                description: values.description,
                transaction_type: values.transactionType,
              },
            },
            onCompleted: (data) => {
              if (transaction?.id !== undefined) {
                updateLedgerTransaction(transaction.id, {
                  ...data.update_transaction_by_pk,
                });
                formik.resetForm();
                setStatus(false);
                toast({
                  title: "Update Succesfully",
                  description: `The update for #${transaction.id} has been completed.`,
                });
              }
            },
            onError: () => {
              toast({
                title: "Something went wrong",
                description: `Error with updating transaction #${transaction?.id}`,
                variant: "destructive",
              });
            },
          });
        }
      }
    },
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // textareaRef.current?;
    textareaRef.current?.focus();

    return () => {};
  }, [transaction?.id]);

  const content = (
    <div className="grid  py-4">
      <InputWrapper label="Description" className="py-2" htmlFor="description">
        <Textarea
          // disabled={disableForm}
          ref={textareaRef}
          onChange={formik.handleChange}
          value={formik.values.description}
          id="description"
          name="description"
          tabIndex={0}
          onFocus={(e) => {
            e.target.selectionStart = e.target.value.length;
          }}
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
            onValueChange={(e) => formik.setFieldValue("transactionType", e)}
            value={formik.values.transactionType}
            name="transaction"
          />
        </InputWrapper>
        <InputWrapper label="Amount" className="py-2" htmlFor="amount">
          <Input
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
          className="h-full max-h-screen sm:max-h-[400px] sm:max-w-[425px]"
          onCloseAutoFocus={(x) => console.log(x)}
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <BasicDialogHeader title={title} />
          <form
            onSubmit={formik.handleSubmit}
            className="flex justify-between flex-col"
          >
            {content}
            <BasicDialogFooter
              error={formik.errors.amount ?? formik.errors.description}
              primaryButton={{
                disabled: loading,
              }}
            />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddEditTransaction;
