import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "@/components/ui/Menu/Menu";
import { menu } from "@/components/ui/Menu/types";

import { signOut } from "next-auth/react";

interface avatarMenuProps {
  imgString?: string | null;
}

const AvatarMenu: React.FC<avatarMenuProps> = ({ imgString = "default" }) => {
  const options: menu = [
    {
      title: "Accounts",
      items: [
        { title: "profile" },
        { title: "account" },
        { title: "profile" },
        { title: "logout", onClick: () => signOut() },
      ],
    },
  ];
  return (
    <>
      <Menu options={options}>
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=${imgString}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
            alt="dicebear avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Menu>
    </>
  );
};
export default AvatarMenu;
