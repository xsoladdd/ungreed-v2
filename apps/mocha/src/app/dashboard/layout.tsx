import Nav from "@/components/layout/navbar/nav";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/helper";
import { redirect } from "next/navigation";
import DashboardProvider from "@/components/providers/DashboardProvider";
import { getUser } from "@/lib/getUser";

export const metadata: Metadata = {
  title: "UNGREED | DASHBOARD",
  description: "Made for those who tracks budget",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.email ?? "");
  if (!session) {
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
