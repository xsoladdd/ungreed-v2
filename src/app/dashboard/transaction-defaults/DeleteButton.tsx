"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Default_Ledger_Transactions_Constraint,
  Default_Ledger_Transactions_Update_Column,
  useUpsertTransactionDefaultMutation,
} from "@/graphql/generated/graphql";
import { useSearchParams } from "@/hooks/useSearchParams";
import { useGlobalStore } from "@/store/globalStore";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useTransactionDefaultStore } from "./useTransactionDefaultStore";

interface DeleteButtonProps {
  loading: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsModalOpen } = useTransactionDefaultStore();
  const { user } = useGlobalStore();
  const { getParams, removeParam } = useSearchParams();

  const [deleteTransactionDefault, { loading: deleteLoading }] =
    useUpsertTransactionDefaultMutation({
      refetchQueries: ["getDefaultLedgerTransactions"],
      onCompleted: () => {
        removeParam("selectedLedger");
        setTimeout(() => {
          setIsOpen(false);
          setIsModalOpen(false);
        }, 100);
      },
    });
  const selectedLedger = getParams("selectedLedger");

  const ledgerData = selectedLedger ? JSON.parse(selectedLedger) : null;

  const handleYes = () => {
    if (ledgerData) {
      deleteTransactionDefault({
        variables: {
          object: {
            is_deleted: true,
            id: ledgerData.id,
            user_id: user?.id,
            cutoff: ledgerData.cutoff,
            description: ledgerData.description,
            amount: ledgerData.amount,
            transaction_type: ledgerData.transaction_type,
          },
          onConflict: {
            constraint:
              Default_Ledger_Transactions_Constraint.DefaultLedgerTransactionsPkey,
            update_columns: [
              Default_Ledger_Transactions_Update_Column.IsDeleted,
            ],
          },
        },
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!deleteLoading || !loading) {
          setIsOpen(open);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon" disabled={loading}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleYes}
            disabled={deleteLoading}
          >
            {deleteLoading ? "Deleting..." : "Yes, Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteButton;
