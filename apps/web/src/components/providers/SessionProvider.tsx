"use client";
import { sessionType } from "@/types/common";
import { SessionProvider as SessionProvideBase } from "next-auth/react";
import { ReactNode, useEffect } from "react";

const SessionProvider: React.FC<{ session: any; children: ReactNode }> = ({
  session,
  children,
}) => {
  const accessToken = (session as unknown as sessionType).accessToken as string;

  useEffect(() => {
    localStorage.setItem("token", accessToken);
    return () => {};
  }, [accessToken]);

  return (
    <>
      <SessionProvideBase session={session}>{children}</SessionProvideBase>
    </>
  );
};
export default SessionProvider;
