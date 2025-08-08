"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatMoney } from "@/lib/formatMoney";
import React from "react";
import TableLoading from "../Components/TableLoading";
import TableRowMessage from "../Components/TableRowMessage";
import { useFetchTransactionDefault } from "./useFetchTransactionDefault";
import { useSearchParams } from "@/hooks/useSearchParams";
import AddEditTDModal from "./AddEditTDModal";
import { useTransactionDefaultStore } from "./useTransactionDefaultStore";

const TransactionDefaultTable: React.FC = () => {
  const { data, loading, error } = useFetchTransactionDefault();
  const { setParams } = useSearchParams();
  const { isModalOpen, setIsModalOpen } = useTransactionDefaultStore();

  const tableHead = (
    <TableHeader className=" ">
      <TableRow className="border-b-white hover:bg-transparent">
        <TableHead className="w-[100px] ">#</TableHead>
        <TableHead>Description</TableHead>
        <TableHead className="text-right">Cutoff</TableHead>
        <TableHead className="text-right">Type</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
  );

  if (loading) {
    return <TableLoading tableHead={tableHead} />;
  }

  const tableBody = (
    <TableBody className="text-white cursor-pointer ">
      {error ? (
        <TableRowMessage
          colspan={5}
          message="Error loading data"
          caption={error.message}
        />
      ) : !data?.default_ledger_transactions ||
        data.default_ledger_transactions.length === 0 ? (
        <TableRowMessage
          colspan={5}
          message="No data available"
          caption="No ledger entries found for the selected period."
        />
      ) : (
        data.default_ledger_transactions.map((tdLedger, index) => {
          const { id, amount, cutoff, description, transaction_type } =
            tdLedger;
          return (
            <TableRow
              key={id}
              className="hover:bg-primary/10 py-4"
              onClick={() => {
                setParams({ selectedLedger: JSON.stringify(tdLedger) });
                setTimeout(() => {
                  setIsModalOpen(true);
                }, 150);
              }}
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{description}</TableCell>

              <TableCell className="text-right">{cutoff}</TableCell>
              <TableCell className="text-right">
                {transaction_type === "-"
                  ? "Expense"
                  : transaction_type === "+"
                  ? "Income"
                  : "Pass through"}
              </TableCell>
              <TableCell className="text-right">
                {formatMoney(amount)}
              </TableCell>
            </TableRow>
          );
        })
      )}
    </TableBody>
  );

  return (
    <>
      <Table className="text-white ">
        {tableHead}
        {tableBody}
      </Table>
    </>
  );
};
export default TransactionDefaultTable;
