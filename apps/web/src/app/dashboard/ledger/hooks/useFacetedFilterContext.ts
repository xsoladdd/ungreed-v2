import { facetedFilterProps } from "@/components/ui/FacetedFilter/type";
import { TFilter, useLedgerContext } from "../Context/useLedgerContext";

export const useFacetedFilterContext = (
  key: keyof TFilter
): facetedFilterProps => {
  const { filter, setFilter } = useLedgerContext();

  const selectedValues = filter[key];

  const addValue = (value: string) => {
    setFilter(key, [...filter[key], value]);
  };

  const removeValue = (value: any) => {
    let newArr = filter[key];
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
