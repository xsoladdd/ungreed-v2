import {
  TableCell,
  TableFooter as TableFooterBase,
  TableRow,
} from "@/components/ui/table";
import useCalculateTable from "@/hooks/useCalculateTable";
import { formatMoney } from "@/lib/formatMoney";
import { useZustand } from "@/store";

const TableFooter: React.FC = () => {
  const {
    ledger: { ledgerFetchStatus, selectedLedger },
  } = useZustand();
  const [calculateTable] = useCalculateTable();

  const transactions = selectedLedger?.transactions ?? [];
  const { totalBalance, totalExpense, totalIncome } =
    calculateTable(transactions);
  return (
    <TableFooterBase className=" font-medium bg-background border-y-2 ">
      <TableRow className="border-b-2 border-border font-bold">
        <TableCell colSpan={1}>Summary</TableCell>
        <TableCell className="text-right">{formatMoney(totalIncome)}</TableCell>
        <TableCell className="text-right">
          {formatMoney(totalExpense)}
        </TableCell>
      </TableRow>
      {/* <TableRow>
        <TableCell colSpan={2}>Total Expense</TableCell>
        <TableCell className="text-right">
          {formatMoney(totalExpense)}
        </TableCell>
        <TableCell></TableCell>
      </TableRow> */}
      <TableRow className="bg-primary-foreground/50 border-t-2 text-lg">
        <TableCell>Total Balance</TableCell>
        <TableCell className="text-right font-extrabold " colSpan={2}>
          {formatMoney(totalBalance)}
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableFooterBase>
  );
};
export default TableFooter;
