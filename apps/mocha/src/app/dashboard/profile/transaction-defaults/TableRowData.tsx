"use client";
import ActionRow, { IActionRowProps } from "@/components/ui/ActionRow";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  GetDefaultLedgerTransactionsQuery,
  useUpdateDefaultLedgerTransactionsByPkMutation,
} from "@/graphql/client.generated";
import { formatMoney } from "@/lib/formatMoney";

import useToggle from "@/hooks/useToggle";
import AlertDialog from "@/components/ui/AlertDialog";
import { useToast } from "@/components/ui/use-toast";
import { useZustand } from "@/store";
import useSearchParams from "@/hooks/useSearchParams";
interface ITableRowDataProps {
  item: GetDefaultLedgerTransactionsQuery["default_ledger_transactions"][0];
  // handleRefetch: () => void;
}

const TableRowData: React.FC<ITableRowDataProps> = ({
  // handleRefetch,
  item,
}) => {
  const { amount, id, cutoff, description, transaction_type } = item;
  // const [editModalStatus, setEditModalStatus] = useToggle(false);
  const [_, setActiveId] = useSearchParams("editTransactionId");
  const [deleteAlertStatus, setDeleteAlertStatus] = useToggle(false);
  const { toast } = useToast();
  const { refetch: zRefetch } = useZustand();
  const actionMenuData: IActionRowProps["items"] = [
    {
      item: [
        {
          label: `Edit`,
          onClick: () => setActiveId(item.id.toString()),
        },
        {
          label: "Delete",
          onClick: () => setDeleteAlertStatus(true),
        },
      ],
    },
  ];

  const [updateDefaultLedgerTransacation, { loading: deleteLoading }] =
    useUpdateDefaultLedgerTransactionsByPkMutation();

  const handleDeleteSubmit = () => {
    updateDefaultLedgerTransacation({
      variables: {
        pkColumns: {
          id: item.id,
        },
        set: {
          is_deleted: true,
        },
      },
      onCompleted: () => {
        toast({
          title: "Delete success",
          description: `Succesfully delete record # ${item.id}`,
        });
        zRefetch.setter("defaultLedgerItems", true);
        setDeleteAlertStatus(false);
      },
      onError: (e) => {
        console.error(e);
        toast({
          title: "Something went wrong",
          description: `Failed to delete record # ${item.id}`,
          variant: "destructive",
        });
        setDeleteAlertStatus(false);
      },
    });
  };
  return (
    <>
      <TableRow key={id}>
        <td className="hidden">
          <AlertDialog
            title="DELETE WARNING"
            isOpen={deleteAlertStatus}
            variant="destructive"
            loading={deleteLoading}
            handleCancel={() => setDeleteAlertStatus(false)}
            handleSubmit={handleDeleteSubmit}
          >
            Are you sure that you want to delete record # {item.id}?
          </AlertDialog>
        </td>
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
