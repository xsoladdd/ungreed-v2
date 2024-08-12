"use client";

import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background ">
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
          <div className="">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

// 22c55e
