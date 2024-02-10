import { TableCell, TableRow } from "@/components/ui/table";

export const loader = (
  <span className="animate-pulse w-1/3 bg-white/20 rounded-full h-[18px] flex"></span>
);
export const tableLoader = (
  <TableRow className="hover:bg-card">
    <TableCell className="font-medium text-center" colSpan={4}>
      Loading
    </TableCell>
  </TableRow>
);
