import {
  GetDefaultLedgerTransactionsQuery,
  GetLedgerQuery,
  Transaction,
  useGetDefaultLedgerTransactionsQuery,
} from "@/graphql/client.generated";
import { StateCreator } from "zustand";

type f = GetDefaultLedgerTransactionsQuery["default_ledger_transactions"];
type ItemsT = {
  data: f | undefined;
};
type SetterT = (refetchKey: keyof ItemsT, x: any) => void;

interface EventT {
  setItem: SetterT;
  setData: (data: f) => void;
}

interface AllT extends ItemsT, EventT {}

export type TransactionDefaultSlice = {
  transactionDefault: AllT;
};

export const createTransactionDefaultSlice: StateCreator<
  TransactionDefaultSlice,
  [],
  [],
  TransactionDefaultSlice
> = (set) => ({
  transactionDefault: {
    data: undefined,
    setItem: (refetchKey, value) =>
      set(({ transactionDefault }) => ({
        transactionDefault: { ...transactionDefault, [refetchKey]: value },
      })),
    setData: (data) =>
      set(({ transactionDefault }) => ({
        transactionDefault: { ...transactionDefault, data: data },
      })),
  },
});
