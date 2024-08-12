"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import UserDetails from "@/app/dashboard/Components/layout/UserDetails";
import { sidebarLinkItems } from "@/app/dashboard/Components/layout/helper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";
import { Separator } from "../separator";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      <aside className="w-[250px] relative  flex-col px-4 h-100% hidden md:flex">
        <div className="pt-20 flex flex-col gap-4">
          <UserDetails />
          <nav
            className={cn("flex  flex-col space-x-0 space-y-1", className)}
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
