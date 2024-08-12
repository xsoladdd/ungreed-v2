"use client";
import { useGetUserQuery } from "@/graphql/client.generated";
import { useZustand } from "@/store";
import { SessionUser } from "@/types/globa";
import React, { useState } from "react";
import CircularSpinner from "../CircularSpinner";

const DashboardProvider: React.FC<{
  children: React.ReactNode;
  // session: Session | null;
  user: SessionUser;
}> = ({ children, user }) => {
  const { setUser } = useZustand();
  const [loading, setLoading] = useState(true);

  useGetUserQuery({
    skip: !user.email,
    onCompleted: (data) => {
      if (data.users?.length !== 0) {
        const dbUser = data.users[0];
        setUser({
          email: dbUser?.email as string,
          id: dbUser?.id,
          dbData: dbUser?.user_profile,
        });
        setLoading(false);
      }
    },
  });
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
