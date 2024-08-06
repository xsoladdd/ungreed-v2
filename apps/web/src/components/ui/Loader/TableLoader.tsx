import Loader from ".";
import { TableCell, TableRow } from "../table";

export const TableLoader = () => {
  return (
    <TableRow className="hover:bg-card">
      <TableCell className="font-medium text-center" colSpan={444}>
        <Loader />
      </TableCell>
    </TableRow>
  );
};
