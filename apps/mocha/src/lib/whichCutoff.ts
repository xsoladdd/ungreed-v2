import { CUTOFF_DAY } from "@/config/res";

export const whichCutoff = (date: number): "first" | "second" => {
  if (date <= CUTOFF_DAY) {
    return "first";
  }
  return "second";
};
