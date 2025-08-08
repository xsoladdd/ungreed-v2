"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransactionDefaultStore } from "./useTransactionDefaultStore";
import { useSearchParams } from "@/hooks/useSearchParams";
import { months, cutoffPeriods } from "@/res";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import DeleteButton from "./DeleteButton";
import {
  Default_Ledger_Transactions_Constraint,
  Default_Ledger_Transactions_Update_Column,
  useUpsertTransactionDefaultMutation,
} from "@/graphql/generated/graphql";
import { useGlobalStore } from "@/store/globalStore";

interface FormData {
  description: string;
  amount: string;
  transaction_type: string;
  cutoff: string;
}

const AddEditTDModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useTransactionDefaultStore();
  const { removeParam, getParams } = useSearchParams();
  const { user } = useGlobalStore();

  const [upsertTransactionDefault, { loading: upsertLoading }] =
    useUpsertTransactionDefaultMutation({
      refetchQueries: ["getDefaultLedgerTransactions"],
      onCompleted: () => {
        removeParam("selectedLedger");
        setTimeout(() => {
          setIsModalOpen(false);
        }, 100);
      },
    });

  const [formData, setFormData] = useState<FormData>({
    description: "",
    amount: "",
    transaction_type: "",
    cutoff: "1st",
  });

  const selectedLedger = getParams("selectedLedger");
  const ledgerData = selectedLedger ? JSON.parse(selectedLedger) : null;
  const isEdit = selectedLedger ? true : false;

  // Populate form data when editing
  useEffect(() => {
    if (selectedLedger) {
      try {
        setFormData({
          description: ledgerData.description || "",
          amount: ledgerData.amount?.toString() || "",
          transaction_type: ledgerData.transaction_type || "",
          cutoff: ledgerData.cutoff || "1st",
        });
      } catch (error) {
        console.error("Error parsing selected ledger:", error);
      }
    } else {
      // Reset form for add mode
      setFormData({
        description: "",
        amount: "",
        transaction_type: "",
        cutoff: "1st",
      });
    }
  }, [selectedLedger]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    upsertTransactionDefault({
      variables: {
        object: {
          id: ledgerData?.id || "",
          amount: parseInt(formData.amount),
          cutoff: formData.cutoff,
          description: formData.description,
          transaction_type: formData.transaction_type,
          user_id: user?.id,
        },
        onConflict: {
          constraint:
            Default_Ledger_Transactions_Constraint.DefaultLedgerTransactionsPkey,
          update_columns: [
            Default_Ledger_Transactions_Update_Column.IsDeleted,
            Default_Ledger_Transactions_Update_Column.Amount,
            Default_Ledger_Transactions_Update_Column.Cutoff,
            Default_Ledger_Transactions_Update_Column.Description,
            Default_Ledger_Transactions_Update_Column.TransactionType,
          ],
        },
      },
    });
  };
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={() => {
        removeParam("selectedLedger");
        setTimeout(() => {
          setIsModalOpen(false);
        }, 100);
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {isEdit ? "Edit Transaction Default" : "Add Transaction Default"}
            </DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Edit the transaction default values."
                : "Set default values for new transactions."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter transaction description"
              />
            </div>
            <div className="flex justify-between gap-4">
              <div className="grid gap-3 w-1/2">
                <Label htmlFor="transaction_type">Transaction Type</Label>
                <Select
                  name="transaction_type"
                  value={formData.transaction_type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, transaction_type: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+">Income</SelectItem>
                    <SelectItem value="-">Expense</SelectItem>
                    <SelectItem value="=">Pass through</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3 w-1/2">
                <Label htmlFor="cutoff">Cutoff Period</Label>
                <Select
                  name="cutoff"
                  value={formData.cutoff}
                  onValueChange={(value) =>
                    setFormData({ ...formData, cutoff: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select cutoff period" />
                  </SelectTrigger>
                  <SelectContent>
                    {cutoffPeriods.map((cutoff) => (
                      <SelectItem key={cutoff.value} value={cutoff.value}>
                        {cutoff.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                placeholder="Enter amount"
              />
            </div>
          </div>
          <DialogFooter className="flex !justify-between ">
            <div className="">
              {isEdit && <DeleteButton loading={upsertLoading} />}
            </div>
            <div className="flex gap-2">
              <DialogClose asChild>
                <Button variant="outline" disabled={upsertLoading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={upsertLoading}
                onClick={handleSubmit}
              >
                {upsertLoading ? "Saving..." : "Save"}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
export default AddEditTDModal;
