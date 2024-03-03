"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

import PageLayoutHeader from "@/components/layout/PageLayoutHeader";
import { TableLoader } from "@/components/ui/Loader/";
import TableMessage from "@/components/ui/TableMessage";
import { useZustand } from "@/store";
import NoLedgerFound from "./NoLedgerFound";
import TableFooter from "./TableFooter";
import TableRowData from "./TableRowData";
import useGenerateLedger from "./hooks";
import useToggle from "@/hooks/useToggle";
import AddEditTransaction from "../Modal/AddEditTransaction";

const LedgerCard: React.FC = () => {
  const {
    ledger: { ledgerFetchStatus, selectedLedger },
  } = useZustand();
  const [modalStatus, setModalStatus] = useToggle(false);
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
  const tableBody = tableData.map((props, key) => (
    <TableRowData data={props} key={key} />
  ));

  const [handleGenerateLedger] = useGenerateLedger();

  const disabledButton =
    ledgerFetchStatus !== "with record" || selectedLedger?.lock === true;

  const tableHeader = (
    <TableHeader>
      <TableRow className="hover:bg-card">
        <TableHead className="w-[300px]">Account</TableHead>
        <TableHead className="text-right w-[200px]">Income</TableHead>
        <TableHead className="text-right w-[200px]">Expense</TableHead>
        <TableHead className="text-right w-[20px]"> </TableHead>
      </TableRow>
    </TableHeader>
  );

  return (
    <>
      <PageLayoutHeader
        title="Ledger table"
        caption="Please filter to continue"
        button={{
          onClick: () => setModalStatus(true),
          title: "New Transaction",
          disabled: disabledButton,
        }}
      />
      <AddEditTransaction setStatus={setModalStatus} status={modalStatus} />

      <div className="">
        <Table>
          {tableHeader}
          <TableBody>
            {loading ? <TableLoader /> : tableBody}
            {!loading && ledgerFetchStatus === "no record" && (
              <NoLedgerFound handleClick={() => handleGenerateLedger()} />
            )}
            {!loading && ledgerFetchStatus === "unfetched" && (
              <TableMessage>Select ledger to continue</TableMessage>
            )}
          </TableBody>
          {!loading &&
            ledgerFetchStatus !== "unfetched" &&
            ledgerFetchStatus !== "no record" && <TableFooter />}

          {!loading && selectedLedger?.lock === true && (
            <TableCaption>THIS TABLE IS LOCKED</TableCaption>
          )}
        </Table>
      </div>
    </>
  );
};
export default LedgerCard;
