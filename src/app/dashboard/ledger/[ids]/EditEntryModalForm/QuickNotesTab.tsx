import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useEffect, useRef } from "react";
import { quickNotes } from "./helper";
import { useUpdateTransaction } from "./useUpdateTransaction";

const QuickNotesTab: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus the textarea when component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const { handleSave, loading } = useUpdateTransaction();

  return (
    <>
      <TabsContent value="quickNotes">
        <Card>
          <CardHeader>
            <CardTitle>Quick Notes</CardTitle>
            <CardDescription>
              Add quick notes to the transaction.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <ScrollArea className="h-[300px] w-full rounded-md border overflow-y-auto">
              <div className="p-4 flex flex-col gap-2">
                {quickNotes?.map((option, index) => (
                  <button
                    disabled={loading}
                    key={index}
                    className="hover:bg-primary/10 rounded-md p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => {
                      handleSave({ note: option });
                    }}
                  >
                    <div className="text-md">{option}</div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};
export default QuickNotesTab;
