import { facetedFilterProps } from "@/components/ui/FacetedFilter/type";
import { TFilter, useLedgerContext } from "../Context/useLedgerContext";

export const useFacetedFilterContext = (
  key: keyof TFilter
): facetedFilterProps => {
  const { filter, setFilter } = useLedgerContext();

  const selectedValues = Array.isArray(filter[key]) ? filter[key] : [];

  const addValue = (value: string) => {
    setFilter(key, [...selectedValues, value]);
  };

  const removeValue = (value: any) => {
    const x = filter[key];
    let newArr = Array.isArray(x) ? x : [];
    const index = newArr.indexOf(value as never);
    if (index !== -1) {
      newArr.splice(index, 1);
    }
    setFilter(key, [...newArr]);
  };

  const clearValues = () => {
    setFilter(key, []);
  };

  return { selectedValues, addValue, removeValue, clearValues };
};
