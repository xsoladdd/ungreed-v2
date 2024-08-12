import { create } from "zustand";

export type TValues = {
  selectedLedger: number[];
};

export type TFilter = {
  cutoff: string[];
  month: number[];
  year: number[];
  activePage: number;
  count: number;
};

const defaultFilter: TFilter = {
  cutoff: [],
  month: [],
  year: [],
  activePage: 1,
  count: 0,
};

interface useLedgerContextType {
  values: TValues;
  setValue: (key: keyof TValues, value: any) => void;
  resetValues: () => void;

  // Filter
  filter: TFilter;
  setFilter: (key: keyof TFilter, value: any) => void;
  setFilterValues: (values: TFilter) => void;
  resetAllFilter: () => void;

  // Dialog
  addRecordDialogStatus: boolean;
  toggleAddRecordDialog: (b: boolean) => void;
}

const defaultValues = {
  selectedLedger: [],
};

// Step 1. Define Store.
export const useLedgerContext = create<useLedgerContextType>((set) => ({
  values: {
    ...defaultValues,
  },
  filter: {
    ...defaultFilter,
  },

  setFilter: (key, value) =>
    set((old) => ({
      ...old,
      filter: {
        ...old.filter,
        [key]: value,
      },
    })),
  setFilterValues: (values) =>
    set((old) => ({
      ...old,
      filter: {
        ...values,
      },
    })),
  resetAllFilter: () =>
    set((old) => ({
      ...old,
      filter: {
        ...defaultFilter,
      },
    })),

  setValue: (key, value) =>
    set((old) => ({
      ...old,
      values: {
        ...old.values,
        [key]: value,
      },
    })),

  addRecordDialogStatus: false,
  toggleAddRecordDialog: (b: boolean) =>
    set((old) => ({
      ...old,
      addRecordDialogStatus: b,
    })),

  resetValues: () =>
    set((old) => ({
      ...old,
      values: {
        ...defaultValues,
      },
    })),
}));
