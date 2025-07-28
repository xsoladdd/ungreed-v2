"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cutoffPeriods, months } from "@/res";
import { getCurrentCutoff } from "@/lib/getCurrentCutoff";
import { useGenerateLedgerMutation } from "@/graphql/generated/graphql";
import { useSession } from "next-auth/react";
import { useGlobalStore } from "@/store/globalStore";

const GenerateModal = () => {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const [generateLedger, { loading, error }] = useGenerateLedgerMutation();
  const { user } = useGlobalStore();

  const [formData, setFormData] = useState({
    year: currentYear.toString(),
    month: new Date().getMonth() + 1,
    cutoff: getCurrentCutoff(),
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    generateLedger({
      variables: {
        input: {
          year: parseInt(formData.year, 10),
          month: formData.month,
          cutoff: formData.cutoff,
          user_id: user?.id,
        },
      },
      onCompleted: () => {
        setOpen(false);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  // Resets the dropdown once closed
  useEffect(() => {
    if (!open) {
      setFormData({
        year: currentYear.toString(),
        month: new Date().getMonth() + 1,
        cutoff: getCurrentCutoff(),
      });
    }
  }, [open]);

  return (
    <div>
      <Button variant="default" onClick={() => setOpen(true)}>
        Generate Record
      </Button>
      <Dialog open={open} onOpenChange={loading ? undefined : setOpen}>
        <form>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Generate Record</DialogTitle>
              <DialogDescription>
                Select the year, month, and cutoff period for the new record.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex  justify-between gap-4">
                <div className="grid gap-3 w-1/2 ">
                  <Label htmlFor="month">Month</Label>
                  <Select
                    name="month"
                    value={formData.month.toString()}
                    onValueChange={(value) =>
                      setFormData({ ...formData, month: Number(value) })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="cutoff">Cutoff Period</Label>
                  <Select
                    name="cutoff"
                    value={formData.cutoff}
                    onValueChange={(value) =>
                      setFormData({ ...formData, cutoff: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select cutoff period" />
                    </SelectTrigger>
                    <SelectContent>
                      {cutoffPeriods.map((cutoff) => (
                        <SelectItem key={cutoff.value} value={cutoff.value}>
                          {cutoff.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  min="2000"
                  max="2100"
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={loading} onClick={handleSubmit}>
                {loading ? "Generating..." : "Generate Record"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default GenerateModal;
