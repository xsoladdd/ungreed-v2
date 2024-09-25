import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Header: React.FC = () => {
  return (
    <>
      <TableHeader>
        <TableRow className="hover:bg-card">
          <TableHead className="text-left w-full  ">Description</TableHead>
          <TableHead className="text-left min-w-[100px]">Cutoff</TableHead>
          <TableHead className="text-left min-w-[100px]">Type</TableHead>
          <TableHead className="text-left min-w-[100px]"> Amount </TableHead>
          <TableHead className="text-left min-w-[20px]"></TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
};
export default Header;
