"use client";
import { useZustand } from "@/store";
import { Session } from "next-auth";
import React, { useEffect } from "react";

const DashboardProvider: React.FC<{
  children: React.ReactNode;
  session: Session | null;
  user: { id: string; email: string };
}> = ({ children, session, user }) => {
  const { setUser } = useZustand();
  useEffect(() => {
    console.log(session);
    console.log(user);
    if (user) {
      setUser({ ...user });
    }
  }, [session]);

  return <>{children}</>;
};
export default DashboardProvider;
