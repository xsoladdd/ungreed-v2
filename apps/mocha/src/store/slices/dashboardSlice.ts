import { GetLedgerQuery, Transaction } from "@/graphql/client.generated";
// import { Ledger } from "@/graphql/client.generated";
import { StateCreator } from "zustand";

export type LedgerFetchStatus =
  | "unfetched"
  | "no record"
  | "with record"
  | "loading";

export type Ledger = GetLedgerQuery["ledger"][0];

type LedgerToggleStatus = "edit" | "add";

export type DashboardSlice = {
  selectedLedger: Partial<Ledger> | undefined;
  setSelectedLedger: (ledger: Partial<Ledger>) => void;
  resetSelectedLedger: (status?: LedgerFetchStatus) => void;
  ledgerFetchStatus: LedgerFetchStatus;
  setLedgerStatus: (status: LedgerFetchStatus) => void;
  selectedTransaction: undefined | Partial<Transaction>;
  setSelectedTransaction: (
    transaction: Partial<Transaction> | undefined
  ) => void;
  addLedgerTransaction: (transaction: Partial<Transaction>) => void;
};
// Export the function to create the DashboardSlice state
export const createDashboardSlice: StateCreator<DashboardSlice> = (set) => ({
  selectedLedger: undefined,
  setSelectedLedger: (ledger) =>
    set(() => ({
      selectedLedger: { ...ledger },
      ledgerFetchStatus: "with record",
    })),
  resetSelectedLedger: (status) =>
    set(() => ({
      selectedLedger: undefined,
      ledgerFetchStatus: status ? status : "no record",
    })),
  ledgerFetchStatus: "unfetched",
  setLedgerStatus: (status) =>
    set(() => ({
      ledgerFetchStatus: status,
    })),
  selectedTransaction: undefined,
  setSelectedTransaction: (transaction) =>
    set(() => ({
      selectedTransaction: transaction,
    })),
  addLedgerTransaction: (transaction) =>
    set((state) => {
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
        state.selectedLedger?.transactions ?? ([] satisfies Array<Transaction>);

      const selectedLedger: Partial<Ledger> = {
        ...state.selectedLedger,
        transactions: [...otherTransaction, trans],
      };
      return {
        selectedLedger,
        ledgerFetchStatus: "with record",
      };
    }),
});
