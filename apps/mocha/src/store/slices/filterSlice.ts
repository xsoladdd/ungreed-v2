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

export type FilterSlice = {
  setFilterData: (data: filterType) => void;
  filterData: filterType;
};

export const createFilterSlice: StateCreator<
  FilterSlice,
  [],
  [],
  FilterSlice
> = (set) => ({
  filterData: {
    cutoff: "1st",
    month: 2,
    year: 2024,
  },
  setFilterData: (data) =>
    set(() => ({
      filterData: { ...data },
    })),
});
