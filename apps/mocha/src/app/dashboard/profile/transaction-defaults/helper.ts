import { GetDefaultLedgerTransactionsQuery } from "@/graphql/client.generated";
import * as Yup from "yup";
export const formSchema = Yup.object({
  transactionType: Yup.string()
    .oneOf(["+", "-"] as const)
    .defined(),
  cutoff: Yup.string()
    .oneOf(["1st", "2nd"] as const)
    .defined(),
  description: Yup.string()
    .min(2, "Description must be 2 characters or more")
    .max(50, "Description must be 20 characters or less")
    .required("Description is required"),
  amount: Yup.number()
    .min(1, "Amount must not have value lessthan 1")
    .required("Amount is required"),
});

export type addEditModalType = {
  item?: GetDefaultLedgerTransactionsQuery["default_ledger_transactions"][0];
  status: boolean;
  setStatus: (b: boolean) => void;
};
