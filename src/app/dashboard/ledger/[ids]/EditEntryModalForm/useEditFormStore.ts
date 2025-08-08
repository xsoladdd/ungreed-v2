import { GetLedgerListQuery } from "@/graphql/generated/graphql";
import { create } from "zustand";

export const useEditFormStore = create<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  transaction: GetLedgerListQuery["ledger"][0]["transactions"][0] | null;
  setTransaction: (
    transaction: GetLedgerListQuery["ledger"][0]["transactions"][0] | null
  ) => void;
  populateTransaction: (
    transaction: GetLedgerListQuery["ledger"][0]["transactions"][0] | null
  ) => void;
  closeModal: () => void;
}>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  transaction: null,
  setTransaction: (transaction) => set({ transaction }),

  populateTransaction: (transaction) => {
    set({ transaction, isOpen: true });
  },
  closeModal: () => set({ isOpen: false, transaction: null }),
}));
