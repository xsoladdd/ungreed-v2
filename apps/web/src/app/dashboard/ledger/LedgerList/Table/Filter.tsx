"use client";
import FacetedFilter from "@/components/ui/FacetedFilter";
import { cutoff_options, months_options, year_options } from "@/lib/var";
import { useFacetedFilterContext } from "../../hooks/useFacetedFilterContext";
import { Button } from "@/components/ui/button";
import { useLedgerContext } from "../../Context/useLedgerContext";

const Filter: React.FC = () => {
  const { resetAllFilter } = useLedgerContext();

  const cutoffFilter = useFacetedFilterContext("cutoff");
  const monthFilter = useFacetedFilterContext("month");
  const yearFilter = useFacetedFilterContext("year");
  return (
    <>
      <div className="pb-4 flex gap-3 ">
        <FacetedFilter
          options={[
            ...cutoff_options.map(({ text, value }) => ({
              label: text,
              value,
            })),
          ]}
          title="Cutoff"
          {...cutoffFilter}
        />
        <FacetedFilter
          title="Month"
          options={[
            ...months_options.map(({ text, value }) => ({
              label: text,
              value,
            })),
          ]}
          {...monthFilter}
        />
        <FacetedFilter
          options={[
            ...year_options.map(({ text, value }) => ({
              label: text,
              value,
            })),
          ]}
          title="Year"
          {...yearFilter}
        />
        <Button
          variant="outline"
          size="sm"
          className="h-8"
          onClick={() => resetAllFilter()}
        >
          Clear filter
        </Button>
      </div>
    </>
  );
};
export default Filter;
