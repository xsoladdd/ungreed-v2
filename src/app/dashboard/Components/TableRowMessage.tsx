import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

interface ITableRowMessageProps {
  colspan: number;
  message: string | React.ReactNode;
  caption?: string | React.ReactNode;
  onClick?: () => void;
}

const TableRowMessage: React.FC<ITableRowMessageProps> = ({
  colspan,
  message,
  caption,
  onClick,
}) => {
  return (
    <>
      <TableRow onClick={onClick}>
        <TableCell colSpan={colspan} className="text-center py-8 text-gray-400">
          <div className="space-y-2">
            <p>{message}</p>
            {caption && <p className="text-sm">{caption}</p>}
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRowMessage;
