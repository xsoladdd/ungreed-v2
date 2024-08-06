import { CUTOFF_DAY } from "@/config/res";
import { cutoffType } from "@/store/slices/filterSlice";

export const isFuture = (month: number, year: number): boolean => {
  const x = new Date();
  const currentDate = new Date(x.getFullYear(), x.getMonth(), 1);
  const inputDate = new Date(year, month - 1, 1); // Month is 0-indexed in JavaScript Date objects
  const dateEvaluation = inputDate >= currentDate;

  return dateEvaluation;
};
