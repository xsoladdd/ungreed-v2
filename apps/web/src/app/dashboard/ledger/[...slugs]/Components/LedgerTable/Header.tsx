import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Header: React.FC<{ tableControl?: boolean }> = ({ tableControl }) => {
  return (
    <>
      <TableHeader>
        <TableRow className="hover:bg-card">
          {tableControl && <TableHead className="max-w-[70px]"></TableHead>}
          <TableHead className="">Account</TableHead>
          <TableHead className="text-left max-w-[100px]">Income</TableHead>
          <TableHead className="text-left max-w-[100px]">Expense</TableHead>
          {tableControl && (
            <TableHead className="text-left max-w-[20px]"></TableHead>
          )}
        </TableRow>
      </TableHeader>
    </>
  );
};
export default Header;
