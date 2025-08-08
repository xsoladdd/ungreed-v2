"use client";

import React from "react";
import TableFilter from "../Components/TableFilter/TableFilter";
import { months } from "@/res";
import { FilterProp } from "../Components/TableFilter/helper";
import { Button } from "@/components/ui/button";
import { useTransactionDefaultStore } from "./useTransactionDefaultStore";

const filterData: FilterProp[] = [
  {
    key: "cutoff",
    type: "select",
    label: "Cutoff",
    value: "all",
    options: [
      { value: "all", label: "Both" },
      { value: "1st", label: "First" },
      { value: "2nd", label: "Second" },
    ],
  },
];

const TransactionDefaultFilter: React.FC = () => {
  const { setIsModalOpen } = useTransactionDefaultStore();
  return (
    <>
      <TableFilter
        data={filterData}
        hasSearch={false}
        buttons={
          <>
            <Button onClick={() => setIsModalOpen(true)}>
              Add Transaction Default
            </Button>
          </>
        }
        hasReset={false}
      />
    </>
  );
};
export default TransactionDefaultFilter;
