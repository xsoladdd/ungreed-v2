import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useEditFormStore } from "./useEditFormStore";
import {
  Transaction_Constraint,
  Transaction_Update_Column,
  useInserTransactionMutation,
} from "@/graphql/generated/graphql";
import { useUpdateTransaction } from "./useUpdateTransaction";

const AddNotesTab: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    // Focus the textarea when component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  const { handleSave, loading, closeModal } = useUpdateTransaction();

  return (
    <>
      <TabsContent value="addNotes">
        <Card>
          <CardHeader>
            <CardTitle>Add Notes</CardTitle>
            <CardDescription>Add notes to the transaction.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Textarea
                ref={textareaRef}
                id="tabs-demo-new"
                placeholder="Add notes here..."
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={closeModal} disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={() => handleSave({ note: textareaRef.current?.value })}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save note"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </>
  );
};
export default AddNotesTab;
