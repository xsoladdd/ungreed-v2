import { whichCutoff } from "@/lib/whichCutoff";

export const getCurrentMonthNumber = () => {
  return new Date().getMonth() + 1;
};

export const getCurrentCutoff = () => {
  const day = new Date().getDate();
  const which = whichCutoff(day);
  if (which === "first") {
    return "1st";
  }
  return "2nd";
};

export const tableLimit = 10;
