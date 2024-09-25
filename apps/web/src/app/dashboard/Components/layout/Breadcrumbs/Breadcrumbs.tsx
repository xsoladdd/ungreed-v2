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
import { useBreadcrumbsContext } from "./useBreadcrumbsContext";

const Breadcrumbs: React.FC = () => {
  const f = usePathname();
  const pathArray = f.substring(1).split("/");
  const {
    values: { title, upToIndex },
  } = useBreadcrumbsContext();
  const { push } = useRouter();
  console.log(upToIndex);

  const arr = upToIndex ? pathArray.slice(0, upToIndex + 1) : pathArray;

  return (
    pathArray.length !== 1 && (
      <div className="pt-2 pb-4">
        <Breadcrumb>
          <BreadcrumbList className="cursor-pointer">
            {arr.map((text, idx) => {
              return (
                <Fragment key={idx}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      onClick={() => {
                        if (arr.length !== 1 && arr.length !== idx + 1) {
                          console.log("Should navigate ");
                          // push(`${pathArray.join("/")}`);
                        }
                      }}
                    >
                      {arr.length !== idx + 1 ? text : title || text}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {arr.length !== idx + 1 && <BreadcrumbSeparator />}
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
