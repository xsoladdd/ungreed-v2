"use client";
import AlertDialog from "@/components/ui/AlertDialog";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetDefaultLedgerTransactionsLazyQuery } from "@/graphql/client.generated";
import { useZustand } from "@/store";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import React from "react";

const page: React.FC = () => {
  const { toast } = useToast();
  const { bears, addBear } = useZustand();

  const [aw] = useGetDefaultLedgerTransactionsLazyQuery();

  return (
    <>
      <Card title="Deductions"> {bears}</Card>
      <Card>
        <button onClick={() => addBear()}> increase </button>
        <AlertDialog button="aw">hello</AlertDialog>
      </Card>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
      <Button
        onClick={() => {
          aw({
            variables: {
              where: {
                cutoff: { _eq: "1st" },
              },
            },
            onCompleted: (x) => {
              console.log(x);
            },
          });
        }}
      >
        aw
      </Button>
    </>
  );
};
export default page;
