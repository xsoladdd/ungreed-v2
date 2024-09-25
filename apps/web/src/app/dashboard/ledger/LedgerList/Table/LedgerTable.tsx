"use client";

import { PageLoader } from "@/components/ui/Loader";
import { Table, TableBody } from "@/components/ui/table";
import { Order_By, useGetLedgerListQuery } from "@/graphql/client.generated";
import LedgerTableHead from "./Header";
import Row from "./Row";
import TableInfo from "../../../../../components/TableInfo";
import NewRecordDialog from "../../NewRecordDialog";
import { useLedgerContext } from "../../Context/useLedgerContext";
import TablePagination from "./Pagination";
import { tableLimit } from "../../NewRecordDialog/helper";

const LedgerTable: React.FC = () => {
  const { filter, setFilter } = useLedgerContext();
  const { data, loading } = useGetLedgerListQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      where: {
        cutoff:
          filter.cutoff.length !== 0
            ? {
                _in: filter.cutoff.filter(Boolean),
              }
            : undefined,
        month:
          filter.month.length !== 0
            ? {
                _in: filter.month.filter(Boolean),
              }
            : undefined,
        year:
          filter.year.length !== 0
            ? {
                _in: filter.year.filter(Boolean),
              }
            : undefined,
      },
      orderBy: {
        created_at: Order_By.Desc,
      },
      offset: (filter.activePage - 1) * tableLimit,
      limit: tableLimit,
    },
    onCompleted: (data) => {
      if (typeof data?.ledger_aggregate?.aggregate?.count === "number") {
        setFilter("count", data.ledger_aggregate.aggregate?.count);
      }
    },
  });

  const withData = data?.ledger.length !== 0;
  return (
    <>
      <NewRecordDialog />
      <Table>
        <LedgerTableHead />
        <TableBody>
          {withData &&
            data?.ledger.map((row, idx) => <Row key={idx} row={row} />)}
          {!loading && data?.ledger.length === 0 && (
            <TableInfo>No data</TableInfo>
          )}
          {loading && (
            <TableInfo>
              <PageLoader />
            </TableInfo>
          )}
        </TableBody>
      </Table>
      {withData && (
        <div className="w-full flex place-content-end py-4">
          <TablePagination />
        </div>
      )}
    </>
  );
};
export default LedgerTable;
