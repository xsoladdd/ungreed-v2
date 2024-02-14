"use client";

import Card from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

import { Toggle } from "@/components/ui/toggle";
import { formatMoney } from "@/lib/formatMoney";
import { useZustand } from "@/store";
import { PencilLine } from "lucide-react";
import { cn } from "@/lib/utils";
import AlertDialog from "@/components/ui/AlertDialog";
import useToggle from "@/hooks/useToggle";
import { Transaction } from "@/graphql/client.generated";
import TableMessage from "@/components/ui/TableMessage";
import NoLedgerFound from "./NoLedgerFound";
import { useToast } from "@/components/ui/use-toast";
import { getMonthName } from "@/lib/getMonthName";
import useGenerateLedger from "./hooks";
import { TableLoader } from "@/components/ui/Loader/";

const LedgerCard: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [status, toggle] = useToggle(false);
  const [selectedTransactionPlaceholder, setSelectedTransactionPlaceholder] =
    useState<Partial<Transaction> | undefined>(undefined);

  const { toast } = useToast();

  const {
    ledgerFetchStatus,
    selectedLedger,
    setSelectedTransaction,
    selectedTransaction,
  } = useZustand();
  const loading = ledgerFetchStatus === "loading";

  const tableData = [...(selectedLedger?.transactions ?? [])].sort((a, b) => {
    if (a.transaction_type === "+" && b.transaction_type === "-") {
      return -1;
    } else if (a.transaction_type === "-" && b.transaction_type === "+") {
      return 1;
    } else {
      return a.updated_at.localeCompare(b.updated_at);
    }
  });
  const tableBody = tableData.map(
    ({ amount, description, id, transaction_type, ...rest }) => (
      <TableRow
        key={id}
        className={cn(
          editMode
            ? "hover:bg-primary-foreground/40 cursor-pointer"
            : "hover:bg-card"
        )}
        onClick={() => {
          if (editMode) {
            if (selectedTransaction) {
              setSelectedTransactionPlaceholder({
                amount,
                description,
                transaction_type,
                id,
                ...rest,
              });
              return toggle(true);
            }
            setSelectedTransactionPlaceholder(undefined);
            setSelectedTransaction({
              amount,
              description,
              transaction_type,
              id,
              ...rest,
            });
          }
        }}
      >
        <TableCell className="font-medium ">{description}</TableCell>
        <TableCell className="w-[200px] text-right">
          {transaction_type === "+" ? formatMoney(amount) : " — "}
        </TableCell>
        <TableCell className="w-[200px] text-right">
          {transaction_type === "-" ? formatMoney(amount) : " — "}
        </TableCell>
      </TableRow>
    )
  );

  const [handleGenerateLedger] = useGenerateLedger();

  const disabledButton =
    ledgerFetchStatus !== "with record" || selectedLedger?.lock === true;
  return (
    <>
      <AlertDialog
        title="OVERLAP WARNING!"
        isOpen={status}
        variant="destructive"
        handleCancel={() => toggle(false)}
        handleSubmit={() => {
          toggle(false);
          setSelectedTransactionPlaceholder(undefined);
          setSelectedTransaction({ ...selectedTransactionPlaceholder });
          toast({
            title: "Unsave Changes dismissed",
            description: `Your usave changes with the form is not saved and disregarded`,
          });
        }}
      >
        Are you sure that you want overlap your currently selected data?
      </AlertDialog>
      <Card
        title={`Ledger Record ${!loading && selectedLedger?.lock === true ? `(Locked Table)` : ""}`}
        sub={
          selectedLedger?.id
            ? `${selectedLedger?.cutoff && `${selectedLedger?.cutoff} trench`} of ${getMonthName(selectedLedger?.month ?? 0)} ${selectedLedger?.year} `
            : "Filter to select Ledger"
        }
        className="w-full lg:w-7/12"
        buttonArea={
          <Toggle
            variant={"default"}
            size="sm"
            pressed={editMode}
            onClick={() => setEditMode((old) => !old)}
            disabled={disabledButton}
          >
            <PencilLine size="18" />
          </Toggle>
        }
      >
        <div className="">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-card">
                <TableHead className="w-[300px]">Account</TableHead>
                <TableHead className="text-right w-[200px]">Income</TableHead>
                <TableHead className="text-right w-[200px]">Expense</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? <TableLoader /> : tableBody}
              {!loading && ledgerFetchStatus === "no record" && (
                <NoLedgerFound handleClick={() => handleGenerateLedger()} />
              )}
              {!loading && ledgerFetchStatus === "unfetched" && (
                <TableMessage>Filter to select table</TableMessage>
              )}
            </TableBody>
            {!loading && selectedLedger?.lock === true && (
              <TableCaption>THIS TABLE IS LOCKED</TableCaption>
            )}
          </Table>
        </div>
      </Card>
    </>
  );
};
export default LedgerCard;
