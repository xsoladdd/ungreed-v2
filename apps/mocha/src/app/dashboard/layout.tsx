import Nav from "@/components/layout/navbar/nav";
import type { Metadata } from "next";
// import DashboardProvider from "@/components/providers/DashboardProvider";
// import { getUser } from "@/lib/getUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/helper";
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
  const session = await getServerSession(authOption);
  // const user = await getUser(session?.user?.email ?? "");
  if (!session) {
    redirect(`/auth/login`);
  }
  // console.log(session);
  return (
    <div>
      <Nav />
      {JSON.stringify(session)}
      {/* <DashboardProvider session={session} user={user}> */}
      {children}
      {/* </DashboardProvider> */}
    </div>
  );
}
