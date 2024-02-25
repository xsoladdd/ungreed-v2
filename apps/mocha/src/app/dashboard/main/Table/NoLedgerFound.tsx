"use client";

import TableMessage from "@/components/ui/TableMessage";
import { Button } from "@/components/ui/button";

const NoLedgerFound: React.FC<{ handleClick: () => void }> = ({
  handleClick,
}) => {
  return (
    <>
      <TableMessage>
        No record found,{" "}
        <Button variant="link" className="px-0" onClick={handleClick}>
          Click here to generate
        </Button>
      </TableMessage>
    </>
  );
};
export default NoLedgerFound;
