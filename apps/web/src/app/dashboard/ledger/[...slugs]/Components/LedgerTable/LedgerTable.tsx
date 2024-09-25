import TableInfo from "@/components/TableInfo";
import { PageLoader } from "@/components/ui/Loader";
import { Table, TableBody } from "@/components/ui/table";
import Header from "./Header";
import { TLedger } from "../../../Context/useLedgerContext";

interface LedgerTableProps {
  loading?: boolean;
  row: TLedger;
  tableControl?: boolean;
}

const LedgerTable: React.FC<LedgerTableProps> = ({
  row,
  loading = false,
  tableControl = true,
}) => {
  return (
    <div className="min-w-[400px] w-full h-full">
      {!tableControl && (
        <h3 className="text-sm pt-4 pb-2">
          Ledger: {`${row.cutoff}, ${row?.month} - ${row?.year}`}
        </h3>
      )}
      <Table>
        <Header tableControl={tableControl} />
        <TableBody>
          {loading && (
            <TableInfo>
              <PageLoader />
            </TableInfo>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default LedgerTable;
