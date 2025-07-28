import { GetLedgerListQuery } from "@/graphql/generated/graphql";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import { formatMoney } from "@/lib/formatMoney";
import { renderId } from "@/lib/renderId";
import TableRowMessage from "../TableRowMessage";
import TableLoading from "../TableLoading";

interface ILedgerTransactionsTableProps {
  ledger: GetLedgerListQuery["ledger"][0];
  loading?: boolean;
  showLabel?: boolean;
}

const LedgerTransactionsTable: React.FC<ILedgerTransactionsTableProps> = ({
  ledger,
  loading = false,
  showLabel = false,
}) => {
  const tableHead = (
    <TableHeader className=" ">
      <TableRow className="border-b-white hover:bg-transparent">
        <TableHead>#</TableHead>
        <TableHead>Description</TableHead>
        <TableHead className="text-right">Income</TableHead>
        <TableHead className="text-right">Expense</TableHead>
        <TableHead className="text-right">Note</TableHead>
      </TableRow>
    </TableHeader>
  );

  if (loading) {
    return <TableLoading tableHead={tableHead} />;
  }

  const tableBody = (
    <TableBody className="text-white cursor-pointer ">
      {ledger.transactions.length === 0 ? (
        <TableRowMessage
          colspan={5}
          message="No transactions found"
          caption={<span>Click here if you want to add a transaction</span>}
          onClick={() => {
            console.log("open modal");
          }}
        />
      ) : (
        ledger.transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{renderId(transaction.id)}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell className="text-right">
              {transaction.transaction_type === "+"
                ? formatMoney(transaction.amount)
                : "-"}
            </TableCell>
            <TableCell className="text-right">
              {transaction.transaction_type === "-"
                ? formatMoney(transaction.amount)
                : "-"}
            </TableCell>
            <TableCell className="text-right">
              {transaction.note || "N/A"}
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
  return (
    <div>
      {showLabel && (
        <div className="flex flex-row gap-2">
          <span className="text-xl font-bold">{`${new Date(
            ledger.year || 0,
            ledger.month || 0
          ).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })} - ${ledger.cutoff}`}</span>
        </div>
      )}
      <Table>
        {tableHead}
        {tableBody}
      </Table>
    </div>
  );
};
export default LedgerTransactionsTable;
