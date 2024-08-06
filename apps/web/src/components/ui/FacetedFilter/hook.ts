import React from "react";
import { facetedFilterProps } from "./type";

export const useFacetedFilter = (): facetedFilterProps => {
  const [selectedValues, setSelectedValues] = React.useState<Array<string>>([]);

  const addValue = (value: string) => {
    setSelectedValues((prevArr) => [value, ...prevArr]);
  };

  const removeValue = (value: string) => {
    setSelectedValues((prevArr) => {
      const index = prevArr.indexOf(value);
      if (index !== -1) {
        prevArr.splice(index, 1);
      }
      return [...prevArr];
    });
  };

  const clearValues = () => {
    setSelectedValues(() => []);
  };

  return { selectedValues, addValue, removeValue, clearValues };
};
