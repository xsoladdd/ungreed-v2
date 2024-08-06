import { Dispatch, SetStateAction, useState } from "react";

// Define the type for the useToggle hook
// eslint-disable-next-line no-unused-vars
type UsePaginationReturnType = {
  handleNext: () => void;
  handleBack: () => void;
  limit: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  listSize: number;
  setListSize: Dispatch<SetStateAction<number>>;
};

// Define the useToggle hook
const usePagination = (): UsePaginationReturnType => {
  // TO Migrate into hook
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [listSize, setListSize] = useState(0);
  //  const listSize = data?.ledger_aggregate.aggregate?.count as number;
  const handleNext = () => {
    if (offset < Math.ceil(listSize / limit)) setOffset(offset + limit);
  };
  const handleBack = () => {
    if (offset > 0) setOffset(offset - limit);
  };
  return {
    handleNext,
    handleBack,
    limit,
    offset,
    setOffset,
    setListSize,
    listSize,
  };
};

export default usePagination;
