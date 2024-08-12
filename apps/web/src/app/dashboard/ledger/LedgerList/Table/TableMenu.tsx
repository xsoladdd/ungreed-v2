"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/Menu/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Columns2,
  EllipsisVertical,
  KeyRound,
  Lock,
  Trash2,
} from "lucide-react";
import { useLedgerContext } from "../../Context/useLedgerContext";
import { useGlobalAlertContext } from "@/components/GlobalAlert";

interface ITableMenuProps {}

const TableMenu: React.FC<ITableMenuProps> = ({}) => {
  const { values } = useLedgerContext();
  const { createAlert, setProps } = useGlobalAlertContext();

  const list = [
    {
      label: "Compare",
      Icon: <Columns2 className="h-3 w-3" />,
      disabled: values.selectedLedger.length < 2,
    },
    {
      label: "Lock",
      Icon: <Lock className="h-3 w-3" />,
      disabled: values.selectedLedger.length === 0,
    },
    {
      label: "Unlock",
      Icon: <KeyRound className="h-3 w-3" />,
      disabled: values.selectedLedger.length === 0,
    },
    {
      label: "Delete",
      Icon: <Trash2 className="h-3 w-3" />,
      disabled: values.selectedLedger.length === 0,
      handleClick: () =>
        createAlert({
          children: (
            <>
              <div className="">
                Are you sure that you want to delete the following record?
              </div>
              <span>[{values.selectedLedger.join(", ")}]</span>
            </>
          ),
          title: "Warning",
          isOpen: true,
          footer: (
            <div>
              <Button
                onClick={() => setProps("isOpen", false)}
                variant={"ghost"}
              >
                {" "}
                Cancel{" "}
              </Button>
              <Button
                onClick={() => setProps("isOpen", false)}
                variant={"destructive"}
              >
                Confirm{" "}
              </Button>
            </div>
          ),
        }),
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8" size="sm">
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuLabel>Manage Selected</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {list.map(({ Icon, label, disabled, handleClick }, idx) => (
              <DropdownMenuItem
                disabled={disabled}
                key={idx}
                className="cursor-pointer"
                onClick={handleClick}
              >
                {label}
                <DropdownMenuShortcut>{Icon}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default TableMenu;
