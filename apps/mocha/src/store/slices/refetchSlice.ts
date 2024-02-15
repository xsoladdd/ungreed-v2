import { StateCreator } from "zustand";

type itemsT = {
  defaultLedgerItems: boolean;
  ledgerList: boolean;
};

type setterT = (refetchKey: keyof itemsT, status: boolean) => void;

interface refetchT extends itemsT {
  setter: setterT;
}

export type RefetchSlice = {
  refetch: refetchT;
};
export const createRefetchSlice: StateCreator<
  RefetchSlice,
  [],
  [],
  RefetchSlice
> = (set) => ({
  refetch: {
    defaultLedgerItems: false,
    ledgerList: false,
    setter: (refetchKey, toggle) =>
      set(({ refetch }) => ({
        refetch: { ...refetch, [refetchKey]: toggle },
      })),
  },
});
