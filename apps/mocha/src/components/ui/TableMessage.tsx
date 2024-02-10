import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

interface ITableMessageProps {
  children: React.ReactNode;
}

const TableMessage: React.FC<ITableMessageProps> = ({ children }) => {
  return (
    <>
      <TableRow className="hover:bg-card">
        <TableCell className="font-medium text-center" colSpan={4}>
          {children}
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableMessage;
