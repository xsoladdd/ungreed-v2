import Nav from "@/components/layout/navbar/nav";
import DashboardProvider from "@/components/providers/DashboardProvider";
import { getUser } from "@/graphql/rest/getUser";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/helper";

export const metadata: Metadata = {
  title: "UNGREED | DASHBOARD",
  description: "Made for those who tracks budget",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect(`/`);
  }
  const user = await getUser(session?.user?.email ?? "");
  if (!user.email) {
    redirect(`/`);
  }
  return (
    <div>
      <Nav />
      <DashboardProvider session={session} user={user}>
        {children}
      </DashboardProvider>
    </div>
  );
}
