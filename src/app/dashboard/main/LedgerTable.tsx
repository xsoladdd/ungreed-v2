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

// Dummy data array
const dummyLedgerData = [
  {
    id: 1,
    dateTrench: "January 2024, 15th",
    totalIncome: 5000,
    totalExpense: 3000,
    totalBalance: 2000,
  },
  {
    id: 2,
    dateTrench: "February 2024, 15th",
    totalIncome: 6000,
    totalExpense: 4000,
    totalBalance: 2000,
  },
  {
    id: 3,
    dateTrench: "March 2024, 15th",
    totalIncome: 4500,
    totalExpense: 2500,
    totalBalance: 2000,
  },
];

const LedgerTable: React.FC = () => {
  const loading = false;

  const tableHead = (
    <TableHeader className="text-primary ">
      <TableRow className="border-b-white ">
        <TableHead className="w-[100px] ">#</TableHead>
        <TableHead>Date Trench</TableHead>
        <TableHead className="text-right">Total Income</TableHead>
        <TableHead className="text-right">Total Expense</TableHead>
        <TableHead className="text-right">Total Balance</TableHead>
      </TableRow>
    </TableHeader>
  );

  const tableBody = (
    <TableBody>
      {dummyLedgerData.map((ledger, index) => (
        <TableRow key={ledger.id}>
          <TableCell className="font-medium">{index + 1}</TableCell>
          <TableCell>{ledger.dateTrench}</TableCell>
          <TableCell className="text-right">
            {formatMoney(ledger.totalIncome)}
          </TableCell>
          <TableCell className="text-right">
            {formatMoney(ledger.totalExpense)}
          </TableCell>
          <TableCell className="text-right">
            {formatMoney(ledger.totalBalance)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <>
      <Table className="text-white">
        {tableHead}
        {tableBody}
      </Table>
    </>
  );
};

export default LedgerTable;
