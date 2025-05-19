"use client";

import React from "react";
import { routes } from "../routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      {" "}
      <nav className="flex-1 space-y-1 p-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center rounded-lg px-4 py-2 text-sm  transition-colors font-semibold",
              "hover:bg-accent-2/10  ",
              pathname === route.href
                ? "bg-accent-2/10 text-accent-1"
                : "text-accent-1"
            )}
          >
            {route.title}
          </Link>
        ))}
      </nav>
    </>
  );
};
export default Nav;
