"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinkItems } from "@/app/dashboard/Components/layout/helper";
import AvatarMenu from "@/app/dashboard/Components/layout/navbar/avatar-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";
import { Separator } from "../separator";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      <aside className="w-[250px] relative flex flex-col px-4 h-100% ">
        <div className="pt-20 flex flex-col gap-4">
          <AvatarMenu />
          <nav
            className={cn(
              "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
              className
            )}
            {...props}
          >
            {sidebarLinkItems.map((item, x) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={x}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    isActive && "underline",
                    //   ? "bg-primary-foreground hover:bg-primary-foreground/60"
                    //   : "hover:bg-transparent hover:underline",
                    "justify-start font-semibold text-white w-full"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <Separator orientation="vertical" className="h-full absolute right-0" />
      </aside>
    </>
  );
}

export default SidebarNav;
