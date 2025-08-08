"use client";

import { FilterProp } from "./helper";
import React from "react";
import SelectTypeFilter from "./SelectTypeFilter";
import SearchInput from "./SearchInput";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
interface TableFilterProps {
  data?: FilterProp[];
  hasSearch?: boolean;
  buttons?: React.ReactNode;
  hasReset?: boolean;
}

const TableFilter: React.FC<TableFilterProps> = ({
  data,
  hasSearch = true,
  hasReset = true,
  buttons,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleReset = () => {
    const params = new URLSearchParams(searchParams);
    const keys = data?.map(({ key }) => key);
    keys?.forEach((key) => {
      params.delete(key);
    });
    params.delete("search");
    router.push(`?${params.toString()}`);
  };

  const reset = hasReset && (
    <Button
      className="bg-primary text-white"
      variant="outline"
      onClick={handleReset}
    >
      Reset Filter
    </Button>
  );
  return (
    <>
      <div className="flex lg:gap-4  flex-col lg:flex-row justify-between">
        <div className="flex  flex-col md:flex-row md:gap-4">
          {hasSearch && <SearchInput />}
          {data &&
            data.map((item) => {
              return <SelectTypeFilter filterData={item} key={item.key} />;
            })}
        </div>
      </div>
      <div className="flex gap-2 md:justify-between">
        {reset && <div>{reset}</div>}
        <div className="flex flex-row gap-4 pb-2  ">{buttons}</div>
      </div>
    </>
  );
};

export default TableFilter;
