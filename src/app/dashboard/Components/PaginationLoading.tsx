import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import React from "react";

interface IPaginationLoadingProps {}

const PaginationLoading: React.FC<IPaginationLoadingProps> = ({}) => {
  return (
    <>
      <Pagination className=" ">
        <PaginationContent>
          <PaginationItem>
            <Skeleton className="h-9 w-16" />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className="h-9 w-9" />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className="h-9 w-9" />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className="h-9 w-9" />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className="h-9 w-6" />
          </PaginationItem>
          <PaginationItem>
            <Skeleton className="h-9 w-16" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default PaginationLoading;
