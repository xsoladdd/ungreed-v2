import ActionRow, { IActionRowProps } from "@/components/ui/ActionRow";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetDefaultLedgerTransactionsQuery } from "@/graphql/client.generated";
import { formatMoney } from "@/lib/formatMoney";

interface ITableRowDataProps {
  item: GetDefaultLedgerTransactionsQuery["default_ledger_transactions"][0];
  handleRefetch: () => void;
}

const TableRowData: React.FC<ITableRowDataProps> = ({
  handleRefetch,
  item,
}) => {
  const { amount, id, cutoff, description, transaction_type } = item;

  const actionMenuData: IActionRowProps["items"] = [
    {
      item: [
        {
          label: `Edit`,
          onClick: () => console.log(true),
        },
        {
          label: "Delete",
          onClick: () => console.log(true),
        },
      ],
    },
  ];

  return (
    <>
      <TableRow key={id}>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell className="">{description}</TableCell>
        <TableCell>{cutoff}</TableCell>
        <TableCell className="">{transaction_type}</TableCell>
        <TableCell className="text-right">{formatMoney(amount)}</TableCell>
        <TableCell className="float-right">
          <ActionRow items={actionMenuData} />
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRowData;
