export type facetedFilterProps = {
  selectedValues?: any[];
  addValue: (value: string) => void;
  removeValue: (value: string) => void;
  clearValues: () => void;
};
