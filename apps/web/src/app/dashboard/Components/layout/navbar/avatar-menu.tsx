import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "@/components/ui/Menu/Menu";
import { menu } from "@/components/ui/Menu/types";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useZustand } from "@/store";

const AvatarMenu: React.FC = () => {
  const router = useRouter();
  const { resetUser, user } = useZustand();
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
    // {
    //   title: "Quick Settings",
    //   items: [
    //     {
    //       title: (
    //         <div className="flex gap-2">
    //           <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
    //           <Moon className="hidden h-5 w-5 dark:block" />{" "}
    //           <span className="dark:text-white text-slate-900">
    //             Toggle theme
    //           </span>
    //         </div>
    //       ),
    //       onClick: () => {
    //         setTheme(theme === "light" ? "dark" : "light");
    //       },
    //     },
    //   ],
    // },
  ];
  const dicebearImage = `https://api.dicebear.com/7.x/open-peeps/svg?seed=${user.email}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  return (
    <>
      <div className="flex flex-col items-center gap-2 px-4 py-4">
        <Menu options={options}>
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={user.dbData?.image ? user.dbData?.image : dicebearImage}
              alt="dicebear avatar"
            />
            <AvatarFallback>{}</AvatarFallback>
          </Avatar>
        </Menu>
        <div className="space-y-1 w-full text-center">
          <div className="font-medium">{user.dbData?.name}</div>
          <div className="text-sm text-muted-foreground">{user.email}</div>
        </div>
      </div>
    </>
  );
};
export default AvatarMenu;
