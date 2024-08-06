"use client";
import { useZustand } from "@/store";
import { SessionUser } from "@/types/globa";
import { Session } from "next-auth";
import React, { useEffect, useState } from "react";
import CircularSpinner from "../CircularSpinner";
import { useGetUserQuery } from "@/graphql/client.generated";

const DashboardProvider: React.FC<{
  children: React.ReactNode;
  session: Session | null;
  user: SessionUser;
}> = ({ children, session, user }) => {
  const { setUser } = useZustand();
  const [loading, setLoading] = useState(false);

  useGetUserQuery({
    variables: {
      where: {
        email: { _eq: session?.user?.email },
      },
    },
    skip: !user.email,
    onCompleted: (data) => {
      if (data.users?.length !== 0) {
        const dbUser = data.users[0];
        setUser({
          email: dbUser?.email as string,
          id: dbUser?.id,
          dbData: dbUser?.user_profile,
        });
      }
    },
  });

  useEffect(() => {
    if (user) {
      setUser({ ...user });
    }
  }, [session?.user?.name]);

  return (
    <>
      {loading ? (
        <div className="w-full flex place-content-center py-44">
          <CircularSpinner className="w-16 h-16" />
        </div>
      ) : (
        children
      )}
    </>
  );
};
export default DashboardProvider;
