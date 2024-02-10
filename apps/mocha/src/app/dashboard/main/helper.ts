import { options } from "@/components/ui/Select/types";
import { whichCutoff } from "@/lib/whichCutoff";
import { cutoffType } from "@/store/slices/filterSlice";

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
