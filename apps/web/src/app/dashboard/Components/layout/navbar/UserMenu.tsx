"use client";
import Menu from "@/components/ui/Menu/Menu";
import { menu } from "@/components/ui/Menu/types";
import { Button } from "@/components/ui/button";
import { useZustand } from "@/store";
import { PersonIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const UserMenu: React.FC = () => {
  const router = useRouter();
  const { resetUser } = useZustand();
  const options: menu = [
    {
      title: "Accounts",
      items: [
        {
          title: "home",
          onClick: () => {
            router.push("/dashboard");
          },
        },
        {
          title: "profile",
          onClick: () => {
            router.push("/dashboard/profile/ledger-list");
          },
        },

        {
          title: "logout",
          onClick: () => {
            signOut({ redirect: true, callbackUrl: "/" });
            resetUser();
          },
        },
      ],
    },
  ];
  return (
    <>
      <Menu options={options}>
        {/* <Button variant="link" size="icon"> */}
        <PersonIcon className="h-5 w-5 text-white" />
        {/* </Button> */}
      </Menu>
    </>
  );
};
export default UserMenu;
