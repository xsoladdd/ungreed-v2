import ActionRow, { IActionRowProps } from "@/components/ui/ActionRow";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Transaction,
  useUpdateTransactionMutation,
} from "@/graphql/client.generated";
import { formatMoney } from "@/lib/formatMoney";
import { cn } from "@/lib/utils";
import AddEditTransaction from "../Modal/AddEditTransaction";
import useToggle from "@/hooks/useToggle";
import AlertDialog from "@/components/ui/AlertDialog";
import { useToast } from "@/components/ui/use-toast";
import { useZustand } from "@/store";

interface ITableRowProps {
  data: Transaction;
}

const TableRowData: React.FC<ITableRowProps> = ({ data }) => {
  const [editModalStatus, setEditModalStatus] = useToggle(false);
  const { toast } = useToast();
  const [deleteAlertStatus, setDeleteAlertStatus] = useToggle(false);

  const actionMenuData: IActionRowProps["items"] = [
    {
      item: [
        {
          label: `Edit`,
          onClick: () => setEditModalStatus(true),
        },
        {
          label: "Delete",
          onClick: () => setDeleteAlertStatus(true),
        },
      ],
    },
  ];
  const [updateTransaction, { loading: updateTransactionLoading }] =
    useUpdateTransactionMutation();

  const {
    ledger: { deleteLedgerTransaction },
  } = useZustand();

  return (
    <>
      <TableRow className={cn("hover:bg-card odd:bg-[#fafafa4]")}>
        <td className="hidden">
          <AddEditTransaction
            setStatus={setEditModalStatus}
            status={editModalStatus}
            transaction={data}
          />
          <AlertDialog
            title={`DELETE TRANSACTION`}
            isOpen={deleteAlertStatus}
            loading={updateTransactionLoading}
            handleCancel={() => setDeleteAlertStatus(false)}
            handleSubmit={() => {
              updateTransaction({
                variables: {
                  pkColumns: {
                    id: data?.id as number,
                  },
                  set: {
                    is_deleted: true,
                  },
                },
                onCompleted: () => {
                  if (data?.id !== undefined) {
                    setDeleteAlertStatus(false);
                    toast({
                      title: "Delete Succesful",
                      description: `Transaction #${data.id}} has been deleted succesfully`,
                    });
                    deleteLedgerTransaction(data.id);
                    return;
                  }
                  toast({
                    title: "Something went wrong",
                    description: `No selected transaction id `,
                    variant: "destructive",
                  });
                },
                onError: () => {
                  setDeleteAlertStatus(false);
                  toast({
                    title: "Something went wrong",
                    description: `Failed to delete transaction #${data?.id}} `,
                    variant: "destructive",
                  });
                },
              });
            }}
            variant="destructive"
          >
            Are you sure that you want delete this transaction?
            <span className="flex flex-col pt-4">
              <span>Transaction #: {data?.id}</span>
              <span>Description: {data?.description}</span>
              <span>Amount:: {data?.amount}</span>
            </span>
          </AlertDialog>
        </td>
        <TableCell className="font-medium ">{data.description}</TableCell>
        <TableCell className="w-[200px] text-right">
          {data.transaction_type === "+" ? formatMoney(data.amount) : " — "}
        </TableCell>
        <TableCell className="w-[200px] text-right">
          {data.transaction_type === "-" ? formatMoney(data.amount) : " — "}
        </TableCell>
        <TableCell className="float-right">
          <ActionRow items={actionMenuData} />
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRowData;
