"use client";

import {
  Pagination as Root,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./base-pagination";
import { Dispatch, SetStateAction } from "react";
import Loader from "@/components/ui/Loader";

interface PaginationProps {
  handleNext: () => void;
  handleBack: () => void;
  offset: number;
  listSize: number;
  loading?: boolean;
  setOffset: Dispatch<SetStateAction<number>>;
  limit?: number;
}
type pageType = {
  id: number;
  label: string;
  onClick: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  handleBack,
  handleNext,
  offset,
  listSize = 10,
  loading = false,
  limit = 10,
  setOffset,
}) => {
  const activePage = offset / limit + 1;
  const totalPages: number = Math.ceil(listSize / limit);
  const pagesArray: Array<pageType> = Array(totalPages)
    .fill(undefined)
    .map((_, index) => ({
      id: index + 1,
      label: (index + 1).toString(),
      onClick: () => setOffset((index + 1) * limit - limit),
    }));

  // console.log(listSize);
  // console.log(`page`, offset < Math.ceil(listSize / limit));
  return (
    <>
      <Root className=" py-[4px] w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => !loading && handleBack()}
            />
          </PaginationItem>

          {loading ? (
            <Loader size="sm" />
          ) : (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {pagesArray.map(({ id, label, onClick }) => (
                <PaginationItem key={id}>
                  <PaginationLink
                    href="#"
                    onClick={onClick}
                    isActive={id === activePage}
                  >
                    {label}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext href="#" onClick={() => !loading && handleNext()} />
          </PaginationItem>
        </PaginationContent>
      </Root>
    </>
  );
};
export default Pagination;
