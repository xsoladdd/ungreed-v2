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
// const dummyData: IActionRowProps["items"] = [
//   {
//     item: [
//       { label: "Edit", onClick: () => console.log("red") },
//       { label: "Make a copy", onClick: () => console.log("blue") },
//       { label: "Favorite", onClick: () => console.log("green") },
//     ],
//   },
//   {
//     label: "Labels",
//     item: [
//       { label: "Red", onClick: () => console.log("red") },
//       { label: "Blue", onClick: () => console.log("blue") },
//       { label: "Green", onClick: () => console.log("green") },
//     ],
//   },
//   {
//     item: [{ label: "Delete", onClick: () => console.log("red") }],
//   },
// ];

const ActionRow: React.FC<IActionRowProps> = ({
  items,
  // status,
  // toggleStatus,
}) => {
  // const handleOpen = () => toggleStatus && toggleStatus(true);
  // const handleClose = () => toggleStatus && toggleStatus(false);
  return (
    <>
      <DropdownMenu
      // open={status}
      // onOpenChange={(open) => toggleStatus && toggleStatus(open)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted focus-visible:ring-transparent focus-visible:ring-0"
            // onClick={handleOpen}
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[160px]"
          // onPointerDownOutside={handleClose}
          // onEscapeKeyDown={handleClose}
          // onCloseAutoFocus={handleClose}
        >
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
        {/* <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup>
                {labels.map((label) => (
                  <DropdownMenuRadioItem key={label.value} value={label.value}>
                    {label.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent> */}
      </DropdownMenu>
    </>
  );
};
export default ActionRow;
