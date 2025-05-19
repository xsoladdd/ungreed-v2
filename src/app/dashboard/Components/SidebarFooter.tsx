"use server";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const SidebarFooter: React.FC = async () => {
  const session = await auth();
  return (
    <>
      {" "}
      <div className="border-t border-accent-2/20 p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {session?.user?.email?.[0]?.toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-accent-1">
              {session?.user?.email}
            </p>
            <form
              action={async () => {
                await signOut();
              }}
              className="mt-1"
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-accent-3 hover:text-accent-1"
              >
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SidebarFooter;
