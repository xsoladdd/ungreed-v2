"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "./Components/Layout/site-header";
import { AppSidebar } from "./Components/Layout/app-sidebar";
import { usePopulateUser } from "@/hooks/usePopulateUser";
import { Suspense } from "react";
import PageLoader from "./Components/PageLoader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, loading, error } = usePopulateUser();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="overscroll-none">
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {loading && <PageLoader />}
            <Suspense fallback={<PageLoader />}>{children}</Suspense>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
