"use client";
import Image from "next/image";
import SidebarFooter from "./Components/SidebarFooter";
import Nav from "./Components/Nav";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNav from "./Components/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bg-light">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-accent-2/20 bg-white">
        {/* Title Area */}
        <div className="flex items-center gap-3 px-6 pt-24 flex-col">
          <Image
            src="/logo-noborder.png"
            alt="Ungreed Logo"
            width={400}
            height={400}
            className="h-24 w-24"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-accent-1">Ungreed</h1>
            <p className="text-xs text-accent-3">Finance Management</p>
          </div>
        </div>

        {/* Navigation */}
        <Nav />

        {/* User Info Footer */}
        {/* <SidebarFooter /> */}
      </aside>

      {/* Mobile Navigation Overlay */}
      <MobileNav
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-18 lg:h-14 items-center justify-between border-b border-accent-2/20 bg-white px-6">
          {/* Mobile Menu Button */}
          <div className="hidden md:block text-2xl font-bold text-accent-1">
            Dashboard
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {" "}
            <Image
              src="/logo-noborder.png"
              alt="Ungreed Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-accent-1">Ungreed</span>
          </div>
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden p-1 text-accent-1"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-2 md:p-6 text-black ">
          {children}
        </main>
      </div>
    </div>
  );
}
