import { GetLedgerQuery, Transaction } from "@/graphql/client.generated";
import { StateCreator } from "zustand";

export type cutoffType = "1st" | "2nd";
export type LedgerFetchStatus =
  | "unfetched"
  | "no record"
  | "with record"
  | "loading";

export type Ledger = GetLedgerQuery["ledger"][0];
type ItemsT = {
  selectedLedger: Partial<Ledger> | undefined;
  ledgerFetchStatus: LedgerFetchStatus;
};

type SetterT = (refetchKey: keyof ItemsT, status: boolean) => void;

interface EventT {
  setItem: SetterT;
  setSelectedLedger: (ledger: Partial<Ledger>) => void;
  resetSelectedLedger: (status?: LedgerFetchStatus) => void;
  setLedgerStatus: (status: LedgerFetchStatus) => void;
  addLedgerTransaction: (transaction: Partial<Transaction>) => void;
  updateLedgerTransaction: (
    id: number,
    transaction: Partial<Transaction>
  ) => void;
  deleteLedgerTransaction: (id: number) => void;
}

interface AllT extends ItemsT, EventT {}

export type LedgerSlice = {
  ledger: AllT;
};

export const createLedgerSlice: StateCreator<
  LedgerSlice,
  [],
  [],
  LedgerSlice
> = (set) => ({
  ledger: {
    ledgerFetchStatus: "unfetched",
    selectedLedger: undefined,
    setItem: (refetchKey, value) =>
      set(({ ledger }) => ({
        ledger: { ...ledger, [refetchKey]: value },
      })),
    setSelectedLedger: (ledgerParams) =>
      set(({ ledger }) => ({
        ledger: {
          ...ledger,
          selectedLedger: ledgerParams,
          ledgerFetchStatus: "with record",
        },
      })),
    resetSelectedLedger: (status) =>
      set(({ ledger }) => ({
        ledger: {
          ...ledger,
          selectedLedger: undefined,
          ledgerFetchStatus: status ? status : "no record",
        },
      })),
    setLedgerStatus: (status) =>
      set(({ ledger }) => ({
        ledger: {
          ...ledger,
          ledgerFetchStatus: status,
        },
      })),
    addLedgerTransaction: (transaction) =>
      set(({ ledger }) => {
        const trans = {
          amount: transaction.amount as number,
          created_at: transaction.created_at as string,
          description: transaction.description as string,
          id: transaction.id as number,
          is_deleted: transaction.is_deleted as boolean,
          ledger_id: transaction.ledger_id as number,
          transaction_type: transaction.transaction_type as string,
          updated_at: transaction.updated_at as string,
          __typename: transaction.__typename,
        } satisfies Transaction;

        const otherTransaction =
          ledger.selectedLedger?.transactions ??
          ([] satisfies Array<Transaction>);

        const selectedLedger: Partial<Ledger> = {
          ...ledger.selectedLedger,
          transactions: [...otherTransaction, trans],
        };
        return {
          ledger: {
            ...ledger,
            selectedLedger,
            ledgerFetchStatus: "with record",
          },
        };
      }),
    updateLedgerTransaction: (id, transaction) =>
      set(({ ledger }) => {
        const trans = {
          amount: transaction.amount as number,
          created_at: transaction.created_at as string,
          description: transaction.description as string,
          id: transaction.id as number,
          is_deleted: transaction.is_deleted as boolean,
          ledger_id: transaction.ledger_id as number,
          transaction_type: transaction.transaction_type as string,
          updated_at: transaction.updated_at as string,
          __typename: transaction.__typename,
        } satisfies Transaction;

        const transactionList =
          ledger.selectedLedger?.transactions ??
          ([] satisfies Array<Transaction>);

        const newTransactionList = transactionList.map((transaction) => {
          if (transaction.id === id) {
            // Replace transaction data with newTransactionData
            return { ...trans };
          } else {
            return transaction;
          }
        });
        const selectedLedger: Partial<Ledger> = {
          ...ledger.selectedLedger,
          transactions: newTransactionList,
        };
        return {
          ledger: {
            ...ledger,
            selectedLedger,
            selectedTransaction: undefined,
            ledgerFetchStatus: "with record",
          },
        };
      }),

    deleteLedgerTransaction: (selectedId) =>
      set(({ ledger }) => {
        const transactions = (
          ledger.selectedLedger?.transactions ??
          ([] satisfies Array<Transaction>)
        ).filter(({ id }) => id !== selectedId);

        const selectedLedger: Partial<Ledger> = {
          ...ledger.selectedLedger,
          transactions,
        };

        return {
          ledger: {
            ...ledger,
            selectedLedger,
            selectedTransaction: undefined,
            ledgerFetchStatus: "with record",
          },
        };
      }),
  },
});
