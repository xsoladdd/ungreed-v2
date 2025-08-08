import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { renderId } from "@/lib/renderId";
import React from "react";
import EditEntryTab from "./EditEntryTab";
import QuickSettingsTab from "./QuickSettingsTab";
import { useEditFormStore } from "./useEditFormStore";
import AddNotesTab from "./AddNotesTab";
import QuickNotesTab from "./QuickNotesTab";
import { useUpdateTransaction } from "./useUpdateTransaction";
import DeleteEntryTab from "./DeleteEntryTab";

const EditEntryModalForm: React.FC<{}> = ({}) => {
  const { isOpen, setIsOpen, transaction } = useEditFormStore();

  const { loading } = useUpdateTransaction();

  return (
    <Dialog open={isOpen} onOpenChange={loading ? undefined : setIsOpen}>
      <DialogContent className="sm:max-w-2/4">
        <DialogHeader>
          <DialogTitle>
            Transaction #{renderId(transaction?.id || 0)}
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="quickNotes">
          <TabsList>
            <TabsTrigger value="quickNotes">Quick Notes</TabsTrigger>
            <TabsTrigger value="addNotes">Add Notes</TabsTrigger>
            <TabsTrigger value="editEntry">Edit Entry</TabsTrigger>
            <TabsTrigger value="deleteEntry">Delete Entry</TabsTrigger>
            {/* <TabsTrigger value="quickSettings">Quick Settings</TabsTrigger> */}
          </TabsList>
          <QuickNotesTab />
          <AddNotesTab />
          {/* <QuickSettingsTab /> */}
          <EditEntryTab />
          <DeleteEntryTab />
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
export default EditEntryModalForm;
