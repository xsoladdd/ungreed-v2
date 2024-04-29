import { options } from "@/components/ui/Select/types";
import { whichCutoff } from "@/lib/whichCutoff";
import { cutoffType } from "@/store/slices/filterSlice";
import * as Yup from "yup";

export const months_options: options = [
  { text: "January", value: "1" },
  { text: "February", value: "2" },
  { text: "March", value: "3" },
  { text: "April", value: "4" },
  { text: "May", value: "5" },
  { text: "June", value: "6" },
  { text: "July", value: "7" },
  { text: "August", value: "8" },
  { text: "September", value: "9" },
  { text: "October", value: "10" },
  { text: "November", value: "11" },
  { text: "December", value: "12" },
];

export const year_options: options = [
  { text: "2024", value: "2024" },
  { text: "2025", value: "2025" },
  { text: "2026", value: "2026" },
  { text: "2027", value: "2027" },
  { text: "2028", value: "2028" },
];

export const getCurrentMonthNumber = () => {
  return new Date().getMonth() + 1;
};

export const getCurrentCutoff = (): cutoffType => {
  const day = new Date().getDate();
  const which = whichCutoff(day);
  if (which === "first") {
    return "1st";
  }
  return "2nd";
};

export const filterSchema = Yup.object({
  month: Yup.string()
    .required()
    .oneOf(
      months_options.map(({ value }) => value),
      "Invalid Month, Please select to continue"
    ),
  year: Yup.string()
    .required()
    .oneOf(
      year_options.map(({ value }) => value),
      "Invalid Year, Please select to continue"
    ),
  cutoff: Yup.string().oneOf(
    ["1st", "2nd"],
    "Invalid Cutoff, Please select to continue"
  ),
});

export const addEditTransactionSchema = Yup.object({
  transactionType: Yup.string()
    .oneOf(["+", "-"] as const)
    .defined(),
  description: Yup.string()
    .min(2, "Description must be 2 characters or more")
    .max(50, "Description must be 20 characters or less")
    .required("Description is required"),
  amount: Yup.number()
    .min(1, "Amount must not have value lessthan 1")
    .required("Amount is required"),
});
