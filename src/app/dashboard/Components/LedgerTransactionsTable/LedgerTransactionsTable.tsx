import { GetLedgerListQuery } from "@/graphql/generated/graphql";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import { formatMoney } from "@/lib/formatMoney";
import { renderId } from "@/lib/renderId";
import TableRowMessage from "../TableRowMessage";
import TableLoading from "../TableLoading";
import { useSearchParams } from "next/navigation";

interface ILedgerTransactionsTableProps {
  ledger: GetLedgerListQuery["ledger"][0];
  loading?: boolean;
  showLabel?: boolean;
  onTransactionClick?: (
    transaction: GetLedgerListQuery["ledger"][0]["transactions"][0]
  ) => void;
}

const LedgerTransactionsTable: React.FC<ILedgerTransactionsTableProps> = ({
  ledger,
  loading = false,
  showLabel = false,
  onTransactionClick,
}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const filteredTransactions = ledger.transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search?.toLowerCase() || "")
  );

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
      {filteredTransactions.length === 0 ? (
        <TableRowMessage
          colspan={5}
          message="No transactions found"
          caption={<span>Click here if you want to add a transaction</span>}
        />
      ) : (
        filteredTransactions.map((transaction) => (
          <TableRow
            key={transaction.id}
            onClick={() => {
              onTransactionClick?.(transaction);
            }}
          >
            <TableCell>{renderId(transaction.id)}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell className="text-right">
              {["+", "#"].includes(transaction.transaction_type)
                ? formatMoney(transaction.amount)
                : "-"}
            </TableCell>
            <TableCell className="text-right">
              {["-", "#"].includes(transaction.transaction_type)
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

  const tableFooter = (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={5}>
          <div className="flex flex-row gap-2 justify-end items-center">
            <span className="text-sm">Total Income: </span>
            <span className="text-lg font-semibold">
              {formatMoney(
                filteredTransactions.reduce(
                  (acc, transaction) =>
                    acc +
                    (["+", "#"].includes(transaction.transaction_type)
                      ? transaction.amount
                      : 0),
                  0
                )
              )}
            </span>
          </div>
        </TableCell>
      </TableRow>
      <TableRow className="border-t-white">
        <TableCell colSpan={5}>
          <div className="flex flex-row gap-2 justify-end items-center">
            <span className="text-sm ">Total Expense: </span>
            <span className="text-lg font-semibold">
              {formatMoney(
                filteredTransactions.reduce(
                  (acc, transaction) =>
                    acc +
                    (["-", "#"].includes(transaction.transaction_type)
                      ? transaction.amount
                      : 0),
                  0
                )
              )}
            </span>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
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
        {tableFooter}
      </Table>
    </div>
  );
};
export default LedgerTransactionsTable;
