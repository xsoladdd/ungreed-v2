"use client";
import Card from "@/components/ui/Card";
import { useZustand } from "@/store";
import React from "react";

const page: React.FC = () => {
  const { bears, addBear } = useZustand();

  return (
    <>
      <Card title="Deductions"> {bears}</Card>
      <Card>
        <button onClick={() => addBear()}> increase </button>
      </Card>
    </>
  );
};
export default page;
