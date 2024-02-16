import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "@/components/ui/Menu/Menu";
import { menu } from "@/components/ui/Menu/types";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useZustand } from "@/store";
interface avatarMenuProps {
  imgString?: string | null;
  imgSrc?: string | null;
}

const AvatarMenu: React.FC<avatarMenuProps> = ({
  imgString = "default",
  imgSrc,
}) => {
  const router = useRouter();
  const { resetUser } = useZustand();
  const { setTheme, theme } = useTheme();
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
            router.push("/dashboard/profile");
          },
        },
        {
          title: "settings",
          onClick: () => {
            router.push("/dashboard/settings");
          },
        },
        {
          title: "logout",
          onClick: () => {
            signOut({ redirect: false, callbackUrl: "/" });
            resetUser();
            router.push("/auth/login");
          },
        },
      ],
    },
    {
      title: "Quick Settings",
      items: [
        {
          title: (
            <div className="flex gap-2">
              <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
              <Moon className="hidden h-5 w-5 dark:block" />{" "}
              <span className="dark:text-white text-slate-900">
                Toggle theme
              </span>
            </div>
          ),
          onClick: () => {
            setTheme(theme === "light" ? "dark" : "light");
          },
        },
      ],
    },
  ];
  return (
    <>
      <Menu options={options}>
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage
            src={
              imgSrc
                ? imgSrc
                : `https://api.dicebear.com/7.x/open-peeps/svg?seed=${imgString}&backgroundColor=b6e3f4,c0aede,d1d4f9`
            }
            alt="dicebear avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Menu>
    </>
  );
};
export default AvatarMenu;
