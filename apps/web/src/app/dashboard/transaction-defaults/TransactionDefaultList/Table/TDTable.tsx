"use client";

import TableInfo from "@/components/TableInfo";
import { PageLoader } from "@/components/ui/Loader";
import { Table, TableBody } from "@/components/ui/table";
import Header from "./Header";

const TDTable: React.FC = () => {
  const loading = true;
  return (
    <>
      <Table>
        <Header />
        <TableBody>
          {/* {withData &&
            data?.ledger.map((row, idx) => <Row key={idx} row={row} />)} */}
          {/* {!loading && data?.ledger.length === 0 && (
            <TableInfo>No data</TableInfo>
          )} */}
          {loading && (
            <TableInfo>
              <PageLoader />
            </TableInfo>
          )}
        </TableBody>
      </Table>
    </>
  );
};
export default TDTable;
