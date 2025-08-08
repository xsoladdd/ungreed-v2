import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TransactionDefaultState {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const useTransactionDefaultStore = create<TransactionDefaultState>()(
  devtools(
    (set) => ({
      isModalOpen: false,
      setIsModalOpen: (isModalOpen) =>
        set({ isModalOpen }, false, "setIsModalOpen"),
    }),
    {
      name: "transaction-default-store",
    }
  )
);
