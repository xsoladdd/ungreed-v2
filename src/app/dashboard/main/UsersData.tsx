"use client";

import { useUsersQuery } from "@/graphql/generated/graphql";

export default function UsersData() {
  const { data, loading, error } = useUsersQuery();

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {JSON.stringify(data)}
      {/* Example usage: */}
    </div>
  );
}
