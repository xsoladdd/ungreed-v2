"use client";
import { LogOut } from "lucide-react";
import { User } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const UserArea: React.FC<{
  session?: Session | null;
  loading?: boolean;
}> = ({ session, loading = false }) => {
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-primary animate-pulse">
        <div className="flex items-center gap-2">
          <div className="h-4 bg-gray-700 rounded w-24"></div>
          {/* <div className="w-8 h-8 bg-gray-700 rounded-full"></div> */}
        </div>
        <button
          disabled
          className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <LogOut size={20} />
        </button>
      </div>
    );
  }

  if (session === null || session === undefined) {
    return null;
  }

  console.log(session);
  const firstname = session.user?.name?.split(" ")[0];

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/auth/signin");
  };

  return (
    <>
      <div className="flex items-center gap-3 text-primary">
        <div className="flex items-center gap-2">
          {" "}
          <span className="text-sm font-medium">Welcome, {firstname}</span>
          {/* {session.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user?.name || "User"}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <User size={20} />
          )} */}
        </div>
        <button
          onClick={handleSignOut}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <LogOut size={20} />
        </button>
      </div>
    </>
  );
};
export default UserArea;
