export type facetedFilterProps = {
  selectedValues?: string[];
  addValue: (value: string) => void;
  removeValue: (value: string) => void;
  clearValues: () => void;
};
