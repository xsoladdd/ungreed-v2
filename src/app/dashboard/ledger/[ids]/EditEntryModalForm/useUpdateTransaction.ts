import {
  Transaction_Constraint,
  Transaction_Update_Column,
  useInserTransactionMutation,
} from "@/graphql/generated/graphql";
import { useEditFormStore } from "./useEditFormStore";

export const useUpdateTransaction = () => {
  const { closeModal, transaction } = useEditFormStore();
  const [updateTransaction, { loading }] = useInserTransactionMutation();

  const handleSave = (transProp: Partial<typeof transaction>) => {
    // @ts-ignore
    const { __typename, ...rest } = transaction;
    updateTransaction({
      variables: {
        input: {
          ...rest,
          ...transProp,
          id: transaction?.id,
        },
        onConflict: {
          constraint: Transaction_Constraint.TransactionPkey,
          update_columns: [
            Transaction_Update_Column.Note,
            Transaction_Update_Column.Description,
            Transaction_Update_Column.Amount,
            Transaction_Update_Column.TransactionType,
            Transaction_Update_Column.IsDeleted,
          ],
        },
      },
      refetchQueries: ["getLedgerList"],
      notifyOnNetworkStatusChange: true,

      onCompleted: () => {
        closeModal();
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };
  return { handleSave, loading, closeModal, transaction };
};
