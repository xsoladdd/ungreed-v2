import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import LedgerListModal from "../../Components/LedgerListModal";

const DropdownSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Icon icon="qlementine-icons:menu-dots-16" width={24} height={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>Manage Ledger</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setIsOpen(true)}>
              Compare
              <DropdownMenuShortcut>
                {" "}
                <Icon icon="pajamas:comparison" width={24} height={24} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Delete
              <DropdownMenuShortcut>
                {" "}
                <Icon icon="fa7-regular:trash-alt" width={24} height={24} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <LedgerListModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default DropdownSettings;
