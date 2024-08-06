"use client";

import { Session } from "next-auth";
import Image from "next/image";
import AvatarMenu from "./avatar-menu";
import Link from "next/link";

export default function NavBar({ session }: { session: Session | null }) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className=" px-24 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-between space-x-4">
          <div className="">
            <Link href={"/dashboard"}>
              <Image
                alt="Logo"
                height={24}
                priority
                src="/logo.svg"
                width={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// 22c55e
