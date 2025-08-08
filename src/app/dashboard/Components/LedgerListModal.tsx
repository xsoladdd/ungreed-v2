import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFetchLedger } from "../main/useFetchLedger";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Separator } from "@radix-ui/react-select";
import { usePathname, useRouter } from "next/navigation";
interface ILedgerListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LedgerListModal: React.FC<ILedgerListModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { data, loading, error } = useFetchLedger(20);
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <form>
          <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Compare Ledger</DialogTitle>
              <DialogDescription>
                Compare the selected ledger with the other ledgers.
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4 flex flex-col gap-2">
                {data?.ledger?.map((ledger) => (
                  <button
                    key={ledger.id}
                    className="hover:bg-primary/10 rounded-md p-2 cursor-pointer"
                    onClick={() => {
                      router.push(`${pathname},${ledger.id}`);
                    }}
                  >
                    <div className="text-md">{`${new Date(
                      ledger?.year || 0,
                      ledger?.month || 0
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })} - ${ledger?.cutoff}`}</div>
                    <Separator className="my-2" />
                  </button>
                ))}
              </div>
            </ScrollArea>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              {/* <Button type="submit">Save changes</Button> */}
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
export default LedgerListModal;
