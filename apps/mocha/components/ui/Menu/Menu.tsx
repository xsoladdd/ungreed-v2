import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { IMenuProps } from "./types";

const Menu: React.FC<IMenuProps> = ({ options, children }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {options.map(({ items, title }, x) => (
            <React.Fragment key={x}>
              {title && <DropdownMenuLabel>{title}</DropdownMenuLabel>}
              {title && <DropdownMenuSeparator />}
              {items.map(({ title: itemTitle, onClick }, i) => (
                <DropdownMenuItem
                  key={i}
                  onClick={onClick}
                  className="capitalize cursor-pointer"
                >
                  {itemTitle}
                </DropdownMenuItem>
              ))}
            </React.Fragment>
          ))}
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default Menu;
