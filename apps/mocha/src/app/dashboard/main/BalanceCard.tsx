"use client";
import Card from "@/components/ui/Card";
import { formatMoney } from "@/lib/formatMoney";
import { useZustand } from "@/store";
import React from "react";
import { loader } from "./LedgerCard/helper";

const BalanceCard: React.FC = () => {
  const { ledgerFetchStatus, selectedLedger } = useZustand();

  const loading = ledgerFetchStatus === "loading";

  const transactions = selectedLedger?.transactions ?? [];

  const totalExpense = transactions
    .filter((transaction) => transaction.transaction_type === "-")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalIncome = transactions
    .filter((transaction) => transaction.transaction_type === "+")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalbalance = totalIncome - totalExpense;
  return (
    <Card
      title="Balance Information"
      // sub="Select filter to display data"
      className="w-full lg:w-3/12"
    >
      <ul className="list-none [&>li]:mt-2 text-sm font-semibold">
        {ColumnWrapper({ label: "Total Income", value: totalIncome })}
        {ColumnWrapper({ label: "Total Expense", value: totalExpense })}
        {ColumnWrapper({ label: "Total Balance", value: totalbalance })}
        {/* {ColumnWrapper({ label: "After Expense", value: 50000 })} */}
      </ul>
    </Card>
  );

  function ColumnWrapper({
    label,
    value,
  }: {
    label: string;
    value: number | string;
  }) {
    return (
      <li className="flex gap-3">
        <span className="font-normal">{label} : </span>{" "}
        {loading ? (
          loader
        ) : (
          <span>{typeof value === "string" ? value : formatMoney(value)}</span>
        )}
      </li>
    );
  }
};
export default BalanceCard;
