import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AppBreadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").filter(Boolean);
  const filteredBreadcrumbs = breadcrumbs.filter(
    (breadcrumb) => breadcrumb !== "ledger"
  );
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {filteredBreadcrumbs.map((breadcrumb, index) => {
            const isLast = index === filteredBreadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/${breadcrumb}`} className="capitalize">
                      {breadcrumb.replace(/-/g, " ")}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};
export default AppBreadcrumbs;
