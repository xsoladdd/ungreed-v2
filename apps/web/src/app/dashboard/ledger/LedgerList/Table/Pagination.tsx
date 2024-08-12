import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { tableLimit } from "../../NewRecordDialog/helper";
import { useLedgerContext } from "../../Context/useLedgerContext";

const TablePagination: React.FC = () => {
  const { filter, setFilter } = useLedgerContext();
  const dif = Math.ceil(filter.count / tableLimit);
  return (
    <>
      <Pagination className="h-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={filter.activePage === 1}
              onClick={() => setFilter("activePage", filter.activePage - 1)}
            />
          </PaginationItem>

          {Array.from(Array(dif).keys()).map((idx) => {
            return (
              <PaginationItem key={idx}>
                <PaginationButton
                  isActive={filter.activePage === idx + 1}
                  onClick={() => setFilter("activePage", idx + 1)}
                >
                  {idx + 1}
                </PaginationButton>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              disabled={filter.activePage === dif}
              onClick={() => setFilter("activePage", filter.activePage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default TablePagination;
