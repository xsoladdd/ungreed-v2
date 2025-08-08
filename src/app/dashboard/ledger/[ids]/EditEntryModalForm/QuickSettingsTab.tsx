import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";

const QuickSettingsTab: React.FC = () => {
  return (
    <>
      <TabsContent value="quickSettings">
        <Card>
          <CardHeader>
            <CardTitle>Quick Settings</CardTitle>
            <CardDescription>
              Make changes to your entry here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3 ">
              <Button
                className="w-full"
                variant="destructive"
                onClick={() => {}}
              >
                Delete Entry
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};
export default QuickSettingsTab;
