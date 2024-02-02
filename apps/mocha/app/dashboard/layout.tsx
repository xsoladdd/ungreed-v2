import Nav from "@/components/layout/navbar/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNGREED | DASHBOARD",
  description: "Made for those who tracks budget",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
