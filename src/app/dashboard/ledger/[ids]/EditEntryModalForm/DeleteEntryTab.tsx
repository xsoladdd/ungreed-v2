import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useUpdateTransaction } from "./useUpdateTransaction";

const DeleteEntryTab: React.FC = () => {
  const { handleSave, loading, closeModal, transaction } =
    useUpdateTransaction();
  const [deleteInput, setDeleteInput] = useState("");
  return (
    <>
      <TabsContent value="deleteEntry">
        <Card>
          <CardHeader>
            <CardTitle>Delete Entry</CardTitle>
            {/* <CardDescription>
              Type in the word DELETE to delete the entry.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3 ">
              <Input
                placeholder="Type in the word DELETE to delete the entry."
                value={deleteInput}
                onChange={(e) => setDeleteInput(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={closeModal} disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (deleteInput === "DELETE") {
                  handleSave({ is_deleted: true });
                }
              }}
              disabled={loading || deleteInput !== "DELETE"}
            >
              {loading ? "Deleting..." : "Delete Entry"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </>
  );
};
export default DeleteEntryTab;
