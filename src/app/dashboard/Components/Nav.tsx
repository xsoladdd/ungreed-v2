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
      <nav className="flex-1 space-y-1 p-4 pt-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center rounded-lg px-4 py-2 text-sm  transition-colors font-semibold",
              "hover:bg-primary/15",
              pathname === route.href
                ? "bg-primary/15 text-white"
                : "text-white"
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
