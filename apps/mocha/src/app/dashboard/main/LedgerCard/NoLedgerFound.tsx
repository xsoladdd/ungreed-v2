"use client";

import TableMessage from "@/components/ui/TableMessage";
import { Button } from "@/components/ui/button";
import { useGenerateLedgerMutation } from "@/graphql/client.generated";
import { useZustand } from "@/store";

const NoLedgerFound: React.FC = () => {
  const [generateLedger] = useGenerateLedgerMutation();
  const { setLedgerStatus, setSelectedLedger, user, filterData } = useZustand();

  const handleClick = () => {
    setLedgerStatus("loading");
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
          year: filterData.year,
        },
      },
      onCompleted: (data) => {
        setSelectedLedger({
          ...data.insert_ledger_one,
        });
      },
    });
  };
  return (
    <>
      <TableMessage>
        No record found,{" "}
        <Button variant="link" className="px-0" onClick={handleClick}>
          click here to generate one
        </Button>
      </TableMessage>
    </>
  );
};
export default NoLedgerFound;
