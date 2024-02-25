import PageLayout from "@/components/layout/PageLayout";
import SidebarNav from "@/components/ui/SideNav/SideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNGREED | Profile",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    title: "Ledger List",
    href: "/dashboard/profile/ledger-list",
  },
  {
    title: "Transaction Defaults",
    href: "/dashboard/profile/transaction-defaults",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <PageLayout
        caption="Manage your profile settings and set preferences."
        pageTitle="Profile"
        SideBar={<SidebarNav items={sidebarNavItems} />}
      >
        {children}
      </PageLayout>
    </>
  );
}
