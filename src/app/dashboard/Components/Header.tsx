"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import React from "react";
import UserArea from "./UserArea";
import { useSession } from "next-auth/react";

interface IHeaderProps {
  setMobileNavOpen: (open: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ setMobileNavOpen }) => {
  const { data: session, status } = useSession();
  const mobile = (
    <>
      <div className="flex items-center gap-3 md:hidden">
        {" "}
        <Image
          src="/logo-noborder.png"
          alt="Ungreed Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold text-primary">Ungreed</span>
      </div>
      <button
        onClick={() => setMobileNavOpen(true)}
        className="md:hidden p-1 text-primary"
      >
        <Menu size={24} />
      </button>
    </>
  );

  const desktop = (
    <div className="hidden md:flex justify-between items-center text-2xl font-bold w-full  ">
      <h1 className="text-primary">Dashboard</h1>
      <UserArea session={session} loading={status === "loading"} />
    </div>
  );
  return (
    <>
      {/* Header */}
      <header className="px-6 flex h-18 lg:h-14 items-center justify-between bg-card-bg">
        {desktop}
        {mobile}
      </header>
    </>
  );
};
export default Header;
