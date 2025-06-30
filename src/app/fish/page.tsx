import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "./data.json";
import { DataTable } from "../dashboard/Components/Layout/data-table";
import { AppSidebar } from "../dashboard/Components/Layout/app-sidebar";
import { SiteHeader } from "../dashboard/Components/Layout/site-header";
import { ChartAreaInteractive } from "../dashboard/Components/Layout/chart-area-interactive";

export default function Page() {
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
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
