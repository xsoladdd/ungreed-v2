import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import React from "react";

interface ITableLoadingProps {
  tableHead: React.ReactNode;
}

const TableLoading: React.FC<ITableLoadingProps> = ({ tableHead }) => {
  return (
    <>
      <Table className="text-white">
        {tableHead}
        <TableBody>
          {[...Array(10)].map((_, index) => (
            <TableRow key={index} className="hover:bg-primary/10 py-4">
              <TableCell>
                <Skeleton className="h-4 w-8" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-4 w-20 ml-auto" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-4 w-20 ml-auto" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-4 w-20 ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </>
  );
};
export default TableLoading;
