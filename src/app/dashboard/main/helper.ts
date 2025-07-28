import { months } from "@/res";
import { FilterProp } from "../Components/TableFilter/helper";

export const limit = 10;

export const filterData: FilterProp[] = [
  {
    key: "month",
    type: "select",
    label: "Month",
    value: "all",
    options: [...months, { value: "all", label: "All" }].reverse(),
  },
  {
    key: "year",
    type: "select",
    label: "Year",
    value: new Date().getFullYear().toString(),
    options: [
      ...Array.from({ length: 7 }, (_, i) => {
        const year = new Date().getFullYear() - 3 + i;
        return { value: year.toString(), label: year.toString() };
      }),
      { value: "all", label: "All" },
    ].reverse(),
  },
];
