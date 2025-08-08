import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useInserTransactionMutation } from "@/graphql/generated/graphql";
import { useParams } from "next/navigation";

const AddEntryFormModal: React.FC<{
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}> = ({ isOpen = false, setIsOpen }) => {
  const { ids } = useParams();
  const ledgerId = ids as string;

  const [formData, setFormData] = useState<{
    description: string;
    amount: string;
    transaction: "+" | "-" | "#";
  }>({
    description: "",
    amount: "",
    transaction: "-",
  });

  const [insertTransaction, { loading }] = useInserTransactionMutation();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(formData);
    await insertTransaction({
      variables: {
        input: {
          description: formData.description,
          amount: Number(formData.amount),
          transaction_type: formData.transaction,
          ledger_id: Number(ledgerId),
        },
      },
      refetchQueries: ["getLedgerList"],
      onCompleted: () => {
        setIsOpen?.(false);
      },
    });
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={loading ? undefined : setIsOpen}>
        <form>
          <DialogTrigger asChild>
            <Button onClick={() => setIsOpen?.(true)}>
              Create a new entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>New Record</DialogTitle>
              <DialogDescription>
                Create a new entry for the ledger.
              </DialogDescription>
            </DialogHeader>
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
                      amount: e.target.value,
                    }))
                  }
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={loading}
                onClick={(e) => handleSubmit(e)}
              >
                {loading ? "Saving..." : "Save record"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
export default AddEntryFormModal;
