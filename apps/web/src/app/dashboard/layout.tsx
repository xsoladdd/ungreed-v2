import DashboardProvider from "@/components/providers/DashboardProvider";
import type { Metadata } from "next";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/helper";
import PageLayout from "@/app/dashboard/Components/layout/PageLayout";
import NavBar from "./Components/layout/navbar/navbar";
import SessionProvider from "@/components/providers/SessionProvider";
import { getUser } from "@/graphql/rest/getUser";
import { sessionType } from "@/types/common";
import GlobalAlert from "@/components/GlobalAlert";
export const metadata: Metadata = {
  title: "UNGREED | DASHBOARD",
  description: "Made for those who tracks budget",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession(authOption)) as sessionType;
  if (!session) {
    redirect(`/`);
  }
  const user = await getUser(session.accessToken);
  if (!user.email) {
    redirect(`/`);
  }
  return (
    <div>
      <SessionProvider session={session}>
        <DashboardProvider user={user}>
          <GlobalAlert />
          <div className="h-screen">
            <NavBar />
            <PageLayout>{children}</PageLayout>
          </div>
        </DashboardProvider>
      </SessionProvider>
    </div>
  );
}
