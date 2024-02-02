"use client";

import { Session } from "next-auth";
import Image from "next/image";
import AvatarMenu from "./avatar-menu";
import LoginModal from "./login-modal";
import { ThemeToggle } from "./theme-toggle";

export default function NavBar({ session }: { session: Session | null }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-between space-x-4">
          <div className="">
            <Image
              alt="Logo"
              height={24}
              priority
              src="/logo.svg"
              width={100}
            />
          </div>

          <nav className="flex items-center space-x-1">
            {session ? (
              <AvatarMenu imgString={session.user?.name} />
            ) : (
              <LoginModal />
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

// 22c55e
