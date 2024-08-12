"use client";

import PageLayoutHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Filter from "./Table/Filter";
import LedgerTable from "./Table/LedgerTable";
import TableMenu from "./Table/TableMenu";
import { useLedgerContext } from "../Context/useLedgerContext";

const LedgerList: React.FC = () => {
  const { toggleAddRecordDialog, filter } = useLedgerContext();

  const filterArea = (
    <div className="flex justify-between flex-col md:flex-row">
      <Filter />
      <div className="pb-4 flex gap-3 ">
        <Button
          className="h-8"
          size="sm"
          onClick={() => toggleAddRecordDialog(true)}
        >
          Add Record
        </Button>
        <TableMenu />
      </div>
    </div>
  );
  return (
    <div>
      <PageLayoutHeader
        title="Ledger List"
        caption="Here you can manage your ledgers, compare one to another and even export them."
      />
      {filterArea}
      <LedgerTable />
    </div>
  );
};
export default LedgerList;
