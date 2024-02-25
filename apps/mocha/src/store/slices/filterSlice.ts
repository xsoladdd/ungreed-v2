import {
  getCurrentCutoff,
  getCurrentMonthNumber,
} from "@/app/dashboard/main/helper";
import { StateCreator } from "zustand";

export type cutoffType = "1st" | "2nd";

type filterType = {
  month: number;
  year: number;
  cutoff: cutoffType;
};

type setterT = (refetchKey: keyof filterType, status: boolean) => void;

interface filterT extends filterType {
  setItem: setterT;
  setFilterData: (val: filterType) => void;
}

export type FilterSlice = {
  filter: filterT;
};

export const createFilterSlice: StateCreator<
  FilterSlice,
  [],
  [],
  FilterSlice
> = (set) => ({
  filter: {
    cutoff: "1st",
    month: 2,
    year: 2024,
    setItem: (refetchKey, value) =>
      set(({ filter }) => ({
        filter: { ...filter, [refetchKey]: value },
      })),
    setFilterData: (value) =>
      set(({ filter }) => ({
        filter: { ...filter, ...value },
      })),
  },
});
