"use client";
import ActionRow, { IActionRowProps } from "@/components/ui/ActionRow";
import AlertDialog from "@/components/ui/AlertDialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import {
  GetLedgerListQuery,
  useDeleteLedgerMutation,
  useUpdateLedgerByPkMutation,
} from "@/graphql/client.generated";
import useCalculateTable from "@/hooks/useCalculateTable";
import useToggle from "@/hooks/useToggle";
import { formatMoney } from "@/lib/formatMoney";
import { getMonthName } from "@/lib/getMonthName";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface TTableRowData {
  item: GetLedgerListQuery["ledger"][0];
  handleRefetch: () => void;
}

const TableRowData: React.FC<TTableRowData> = ({ item, handleRefetch }) => {
  const { cutoff, id, lock, month, transactions, year } = item;
  const { toast } = useToast();
  const [calculateTable] = useCalculateTable();
  const router = useRouter();

  const [updateLedger, { loading: lockLedgerLoading }] =
    useUpdateLedgerByPkMutation({
      notifyOnNetworkStatusChange: true,
    });
  const [deleteLedger, { loading: deleteLedgerLoading }] =
    useDeleteLedgerMutation();

  const [menuStatus, toggleMenuStatus] = useToggle(false);
  const [deleteModalStatus, toggleDeleteModalStatus] = useToggle(false);
  const [lockModalStatus, toggleLockModalStatus] = useToggle(false);

  const { totalBalance, totalExpense, totalIncome } =
    calculateTable(transactions);

  const actionMenuData = ({
    lock,
  }: {
    lock: boolean;
  }): IActionRowProps["items"] => {
    return [
      {
        item: [
          {
            label: lock ? "Unlock" : "Lock",
            onClick: () => toggleLockModalStatus(true),
            // disabled: loading,
          },
          {
            label: "View",
            onClick: () =>
              router.push(
                `/dashboard?year=${item.year}&month=${item.month}&cutoff=${item.cutoff}`
              ),
            // disabled: loading,
          },
          {
            label: "Delete",
            onClick: () => toggleDeleteModalStatus(true),
            disabled: lock,
          },
        ],
      },
    ];
  };

  const handleLock = () => {
    updateLedger({
      variables: {
        pkColumns: {
          id,
        },
        set: {
          lock: !lock,
        },
      },
      onCompleted: () => {
        toggleMenuStatus(false);
        toggleLockModalStatus(false);
        toast({
          title: `${lock ? "Unlocking" : "Locking"} Success`,
          description: `Ledger #${id} is succesfully ${lock ? "Unlock" : "Lock"}`,
        });
      },
      onError: () => {
        toast({
          title: "Something went wrong",
          description: `Failed to lock ledger #${id}`,
          variant: "destructive",
        });
      },
    });
  };
  const handleDelete = () => {
    deleteLedger({
      variables: {
        pkColumns: {
          id,
        },
      },
      onCompleted: () => {
        toast({
          title: `Deleting Success`,
          description: `Ledger #${id} is succesfully deleted`,
        });
        toggleDeleteModalStatus(false);
        toggleMenuStatus(false);
        handleRefetch();
      },
      onError: () => {
        toast({
          title: "Something went wrong",
          description: `Failed to delete ledger #${id}`,
          variant: "destructive",
        });
      },
    });
  };
  return (
    <>
      <tr>
        <td>
          <AlertDialog
            title={`DELETE LEDGER`}
            isOpen={deleteModalStatus}
            loading={deleteLedgerLoading}
            handleCancel={() => toggleDeleteModalStatus(false)}
            handleSubmit={handleDelete}
            variant="destructive"
          >
            Deleting this ledger record cannot be undo, Are you sure that you
            want to proceed?
          </AlertDialog>
          <AlertDialog
            title={`LOCK LEDGER`}
            isOpen={lockModalStatus}
            loading={lockLedgerLoading}
            handleCancel={() => toggleLockModalStatus(false)}
            handleSubmit={handleLock}
            variant="destructive"
          >
            {lock
              ? `Unlocking table will let you mutate the data in it, Are you sure you want to unlock?`
              : `You won't be able to edit ledger after locking, Are you sure you want to lock?`}
          </AlertDialog>
        </td>
      </tr>
      <TableRow key={id} className={cn(lock && "bg-destructive/10")}>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell>{`${getMonthName(month)} ${year}, ${cutoff}`}</TableCell>
        <TableCell className="text-right">{formatMoney(totalIncome)}</TableCell>
        <TableCell className="text-right">
          {formatMoney(totalExpense)}
        </TableCell>
        <TableCell className="text-right">
          {formatMoney(totalBalance)}
        </TableCell>
        <TableCell className="float-right">
          <ActionRow
            items={actionMenuData({ lock })}
            status={menuStatus}
            toggleStatus={toggleMenuStatus}
          />
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRowData;
