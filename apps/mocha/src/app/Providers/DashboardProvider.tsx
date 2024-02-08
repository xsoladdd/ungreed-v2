"use client";
import { useZustand } from "@/store";
import { Session } from "next-auth";
import React, { useEffect } from "react";

const DashboardProvider: React.FC<{
  children: React.ReactNode;
  session: Session | null;
}> = ({ children, session }) => {
  const { setUser } = useZustand();

  useEffect(() => {
    setUser({ email: session?.user?.email ?? "", id: "" });
    // console.log(session);
  }, [session]);

  return <>{children}</>;
};
export default DashboardProvider;
