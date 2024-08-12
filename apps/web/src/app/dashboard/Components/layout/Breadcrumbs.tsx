"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

const Breadcrumbs: React.FC = () => {
  const f = usePathname();
  const pathArray = f.substring(1).split("/");
  const { push } = useRouter();
  return (
    pathArray.length !== 1 && (
      <div className="pt-2 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            {pathArray.map((x, y, z) => {
              return (
                <Fragment key={y}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      onClick={() => {
                        if (
                          pathArray.length !== 1 &&
                          pathArray.length !== y + 1
                        ) {
                          console.log("Should navigate ");
                        }
                      }}
                    >
                      {x}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {pathArray.length !== y + 1 && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    )
  );
};
export default Breadcrumbs;
