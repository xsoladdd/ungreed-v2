import { months_options } from "./var";

export function getMonthName(monthNumber: number) {
  if (monthNumber >= 13) {
    return "Invalid month number";
  }
  const selectedMonth = months_options.find(
    (x) => x.value === monthNumber.toString()
  );
  return selectedMonth?.text;
}

export function getMonthNumber(month: string) {
  const selectedMonth = months_options.find(
    (x) => x.value.toLowerCase() === month.toLowerCase()
  );
  if (!selectedMonth) {
    return "Invalid month";
  }
  return selectedMonth.value;
}
