import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LedgerTableHead: React.FC = () => {
  return (
    <>
      <TableHeader>
        <TableRow className="hover:bg-card">
          <TableHead className="w-[70px]">
            {/* <Checkbox id="terms" /> */}
          </TableHead>
          <TableHead className="w-[140px]">#</TableHead>
          <TableHead className="text-left ">Duration</TableHead>
          <TableHead className="text-left w-[200px]">Income</TableHead>
          <TableHead className="text-left w-[200px]">Expense</TableHead>
          <TableHead className="text-left w-[200px]"> Net </TableHead>
          <TableHead className="text-left w-[20px]"></TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
};
export default LedgerTableHead;
