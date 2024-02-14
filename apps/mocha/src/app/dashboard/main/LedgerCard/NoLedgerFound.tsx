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

/*
    generateLedger({
          variables: {
            input: {
              cutoff: filterData.cutoff,
              month: filterData.month,
              user: {
                data: {
                  email: user.email,
                },
              },
              transactions: {
                data: [...default_ledger_transactions],
              },
              year: filterData.year,
            },
          },
          onCompleted: (data) => {
            setSelectedLedger({
              ...data.insert_ledger_one,
            });
          },
          onError: () => {
            toast({
              title: "Something went wrong",
              description: `Error generating ledger `,
              variant: "destructive",
            });
          },
        });
*/
