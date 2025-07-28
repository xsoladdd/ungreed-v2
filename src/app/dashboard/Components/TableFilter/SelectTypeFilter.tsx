"use client";

import React from "react";
import { FilterProp } from "./helper";
import {
  Select,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import StaticLabel from "./StaticLabel";

interface ISelectTypeFilterProps {
  filterData: FilterProp;
}

const SelectTypeFilter: React.FC<ISelectTypeFilterProps> = ({ filterData }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(filterData.key) || filterData.value;

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(filterData.key, value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-1 pb-4">
      <StaticLabel label={filterData.label} htmlFor={filterData.key} />
      <Select
        value={currentValue}
        onValueChange={handleChange}
        name={filterData.key}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={"Select"} />
        </SelectTrigger>
        <SelectContent>
          {filterData.options.map((item) => {
            return (
              <SelectItem value={item.value} key={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectTypeFilter;
