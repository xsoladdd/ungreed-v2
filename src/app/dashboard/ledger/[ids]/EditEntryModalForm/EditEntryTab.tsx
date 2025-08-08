import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useUpdateTransaction } from "./useUpdateTransaction";

const EditEntryTab: React.FC = () => {
  const { handleSave, loading, transaction } = useUpdateTransaction();
  const [formData, setFormData] = useState({
    description: "",
    transaction: "",
    amount: 0,
    note: "",
  });
  useEffect(() => {
    setFormData({
      description: transaction?.description || "",
      transaction: transaction?.transaction_type || "",
      amount: transaction?.amount || 0,
      note: transaction?.note || "",
    });
  }, [transaction]);
  return (
    <>
      <TabsContent value="editEntry">
        <Card>
          <CardHeader>
            <CardTitle>Edit Entry</CardTitle>
            <CardDescription>Edit the entry here.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  disabled={loading}
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Enter description"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="transaction-type">Transaction Type</Label>
                <Select
                  disabled={loading}
                  value={formData.transaction}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      transaction: value as "+" | "-" | "#",
                    }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select transaction type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="-">Expense</SelectItem>
                    <SelectItem value="+">Income</SelectItem>
                    <SelectItem value="#">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  disabled={loading}
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      amount: Number(e.target.value) || 0,
                    }))
                  }
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="note">Note</Label>
                <Textarea
                  disabled={loading}
                  id="description"
                  name="description"
                  value={formData.note}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      note: e.target.value,
                    }))
                  }
                  placeholder="Enter description"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() =>
                handleSave({
                  description: formData?.description || "",
                  transaction_type: formData?.transaction as "+" | "-" | "#",
                  amount: formData?.amount || 0,
                  note: formData?.note || "",
                })
              }
              disabled={loading}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </>
  );
};
export default EditEntryTab;
