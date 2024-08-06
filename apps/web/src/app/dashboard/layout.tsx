import DashboardProvider from "@/components/providers/DashboardProvider";
import { getUser } from "@/graphql/rest/getUser";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/helper";
import PageLayout from "@/app/dashboard/Components/layout/PageLayout";
import NavBar from "./Components/layout/navbar/navbar";

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
      <DashboardProvider session={session} user={user}>
        <div className="h-screen">
          <NavBar session={session} />
          <PageLayout>{children}</PageLayout>
        </div>
      </DashboardProvider>
    </div>
  );
}
