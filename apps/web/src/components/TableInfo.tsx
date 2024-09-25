import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ITableInfoProps {
  children: React.ReactNode;
  colSpan?: number;
}

const TableInfo: React.FC<ITableInfoProps> = ({ children, colSpan = 7 }) => {
  return (
    <>
      <TableRow className={cn("font-light")}>
        <TableCell
          className="font-medium w-full text-center py-10 "
          colSpan={colSpan}
        >
          {children}
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableInfo;
