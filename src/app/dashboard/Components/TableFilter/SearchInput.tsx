"use client";

import { Input } from "@/components/ui/input";
import React, { useCallback, useEffect, useState } from "react";
import StaticLabel from "./StaticLabel";
import { useRouter, useSearchParams } from "next/navigation";

const keyWord = "search";

const SearchInput: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(keyWord) || "";
  const [inputValue, setInputValue] = useState(currentValue);

  const handleChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(keyWord, value);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  // Debounce the handleChange function
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue !== currentValue) {
        handleChange(inputValue);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(timeoutId);
  }, [inputValue, currentValue, handleChange]);

  // Update local state when URL parameter changes
  useEffect(() => {
    setInputValue(currentValue);
  }, [currentValue]);

  return (
    <div className="flex flex-col gap-1 pb-4">
      <StaticLabel label="Search" htmlFor="search" />
      <Input
        type="text"
        placeholder="Search"
        name="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
