"use client";
import Tooltip from "@/components/ui/Tooltip";
import { Toggle } from "@/components/ui/toggle";
import { PencilLine } from "lucide-react";
import React from "react";

const TestButton: React.FC = () => {
  return (
    <>
      {" "}
      <Tooltip text="Toggle edit mode">
        <Toggle
          variant={"default"}
          size="sm"
          // pressed={editMode}
          // onChange={() => setEditMode((old) => !old)}
        >
          <PencilLine size="18" />
        </Toggle>
      </Tooltip>
    </>
  );
};
export default TestButton;
