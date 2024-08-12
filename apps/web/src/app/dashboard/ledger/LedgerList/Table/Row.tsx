import ActionRow from "@/components/ui/ActionRow";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import { GetLedgerListQuery } from "@/graphql/client.generated";
import { formatMoney } from "@/lib/formatMoney";
import { getMonthName } from "@/lib/getMonth";
import { cn } from "@/lib/utils";
import { useLedgerContext } from "../../Context/useLedgerContext";

interface IRowProps {
  row: GetLedgerListQuery["ledger"][0];
}

const Row: React.FC<IRowProps> = ({ row }) => {
  const { setValue, values } = useLedgerContext();

  const actionMenuData = [
    {
      item: [
        {
          label: `Edit`,
          onClick: () => console.log(`data.id.toString()`),
        },
        {
          label: "Delete",
          onClick: () => console.log(`data.id.toString()`),
        },
      ],
    },
  ];
  const income = row.transactions
    .filter(({ transaction_type }) => transaction_type === "+")
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );

  const expense = row.transactions
    .filter(({ transaction_type }) => transaction_type === "-")
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );

  const net = income - expense;

  const checked = !!values?.selectedLedger?.find((x) => x === row.id);
  return (
    <>
      <TableRow className={cn("hover:bg-card odd:bg-[#fafafa03] font-light")}>
        <TableCell className="font-medium ">
          <Checkbox
            checked={checked}
            onClick={() => {
              if (checked) {
                setValue("selectedLedger", [
                  ...values.selectedLedger.filter((x) => x !== row.id),
                ]);
              } else {
                setValue("selectedLedger", [...values.selectedLedger, row.id]);
              }
            }}
          />
        </TableCell>
        <TableCell className="font-medium ">{row.id}</TableCell>
        <TableCell className="font-medium ">{`${row.cutoff}, ${getMonthName(row.month)} ${row.year}`}</TableCell>
        <TableCell className="font-medium ">{formatMoney(income)}</TableCell>
        <TableCell className="font-medium ">{formatMoney(expense)}</TableCell>
        <TableCell className="font-medium ">{formatMoney(net)}</TableCell>
        <TableCell className="font-medium ">
          <ActionRow items={actionMenuData} />
        </TableCell>
      </TableRow>
    </>
  );
};
export default Row;
