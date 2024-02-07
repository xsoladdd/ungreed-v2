import Nav from "@/app/layout/navbar/nav";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/helper";
import { redirect } from "next/navigation";

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
  if (!session) {
    redirect(`/`);
  }
  return (
    <div>
      <Nav />
      <div className="p-4 ">{children}</div>
    </div>
  );
}
