"use client";
import AlertDialog from "@/components/ui/AlertDialog";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useZustand } from "@/store";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import React from "react";

const page: React.FC = () => {
  const { toast } = useToast();
  const { bears, addBear } = useZustand();

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
    </>
  );
};
export default page;
