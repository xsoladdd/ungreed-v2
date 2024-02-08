"use client";

import Card from "@/components/ui/Card";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { EntryType } from "./type";
import { PencilLine } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { formatMoney } from "@/lib/formatMoney";

const dummyData: Array<EntryType> = [
  { account: "Salary", credit: 15000 },
  { account: "Yessica's Allowance", debit: 4000 },
  { account: "Bills", debit: 2000 },
  { account: "Savings", debit: 2000 },
  { account: "Daily Budget (amount x 15 days)", debit: 4500 },
  { account: "GCredit", debit: 4000 },
  { account: "Homecredit", debit: 2500 },
  { account: "GGives", debit: 2500 },
  { account: "SPay Later", debit: 1500 },
];

const MoneyTreeCard: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <Card
        title="Money Tree"
        sub="Expense Income Datatable"
        className="w-full lg:w-7/12"
        buttonArea={
          <Toggle
            variant={"default"}
            size="sm"
            pressed={editMode}
            onClick={() => setEditMode((old) => !old)}
          >
            <PencilLine size="18" />
          </Toggle>
        }
      >
        <div className="">
          <Table>
            <TableCaption>
              Budget table for month of PUT MONTH HERE .
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Account</TableHead>
                <TableHead className="text-right w-[200px]">Debit</TableHead>
                <TableHead className="text-right w-[200px]">Credit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyData.map(({ account, credit, debit }, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{account}</TableCell>
                  <TableCell className="text-right">
                    {credit && formatMoney(credit)}
                  </TableCell>
                  <TableCell className="text-right">
                    {debit && formatMoney(debit)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
};
export default MoneyTreeCard;
