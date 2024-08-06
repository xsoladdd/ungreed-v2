import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./Menu/dropdown-menu";
import { Button } from "./button";
import { ReactNode } from "react";

type menuItem = {
  label: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};
type menu = { label?: string; item: menuItem[] };

export interface IActionRowProps {
  items?: Array<menu>;
  status?: boolean;
  toggleStatus?: (status: boolean) => void;
}

const ActionRow: React.FC<IActionRowProps> = ({ items }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted focus-visible:ring-transparent focus-visible:ring-0"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          {items &&
            items.map((menu, index) =>
              menu.label ? (
                <DropdownMenuSub key={index}>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    {menu.label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup>
                      {menu.item.map((item, idx) => (
                        <DropdownMenuRadioItem
                          key={idx}
                          value={idx.toString()}
                          onClick={item.onClick}
                          className="cursor-pointer"
                          disabled={item.disabled}
                        >
                          {item.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ) : (
                menu.item.map((item, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    onClick={item.onClick}
                    className="cursor-pointer"
                    disabled={item.disabled}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))
              )
            )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default ActionRow;
