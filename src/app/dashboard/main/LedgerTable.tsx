"use client";

import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
  Table,
} from "@/components/ui/table";
import React from "react";
import { formatMoney } from "@/lib/formatMoney";
import TableLoading from "../Components/TableLoading";
import { useFetchLedger } from "./useFetchLedger";
import { useRouter } from "next/navigation";
import TableRowMessage from "../Components/TableRowMessage";

const LedgerTable: React.FC = () => {
  const { data, loading, error } = useFetchLedger();
  const router = useRouter();

  const tableHead = (
    <TableHeader className=" ">
      <TableRow className="border-b-white hover:bg-transparent">
        <TableHead className="w-[100px] ">#</TableHead>
        <TableHead>Date Trench</TableHead>
        <TableHead className="text-right">Total Income</TableHead>
        <TableHead className="text-right">Total Expense</TableHead>
        <TableHead className="text-right">Total Balance</TableHead>
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
      ) : !data?.ledger || data.ledger.length === 0 ? (
        <TableRowMessage
          colspan={5}
          message="No data available"
          caption="No ledger entries found for the selected period."
        />
      ) : (
        data.ledger.map(({ id, month, year, transactions, cutoff }, index) => {
          return (
            <TableRow
              key={id}
              className="hover:bg-primary/10 py-4"
              onClick={() => {
                router.push(`/dashboard/ledger/${id}`);
              }}
            >
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>
                {new Date(year, month - 1, 1).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
                {cutoff}
              </TableCell>
              <TableCell className="text-right">
                {formatMoney(
                  transactions.reduce(
                    (acc, transaction) => acc + transaction.amount,
                    0
                  )
                )}
              </TableCell>
              <TableCell className="text-right">
                {formatMoney(
                  transactions.reduce(
                    (acc, transaction) => acc + transaction.amount,
                    0
                  )
                )}
              </TableCell>
              <TableCell className="text-right">
                {formatMoney(
                  transactions.reduce(
                    (acc, transaction) => acc + transaction.amount,
                    0
                  )
                )}
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

export default LedgerTable;
