import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";

export type TValues = {
  title: string;
  upToIndex?: number;
};

interface useLedgerContextType {
  values: TValues;
  setValue: (key: keyof TValues, value: any) => void;
  setTitleIndex: (title: string, index?: number) => void;
}

const defaultValues = {
  title: "",
};

// Step 1. Define Store.
export const useBreadcrumbsContext = create<useLedgerContextType>((set) => ({
  values: {
    ...defaultValues,
  },

  setValue: (key, value) =>
    set((old) => ({
      ...old,
      values: {
        ...old.values,
        [key]: value,
      },
    })),
  setTitleIndex: (title, index) =>
    set((old) => ({
      ...old,
      values: {
        ...old.values,
        title,
        upToIndex: index,
      },
    })),
}));

export const useBreadcrumbsTitle = (title: string, upToIndex?: number) => {
  const { setTitleIndex } = useBreadcrumbsContext();
  useEffect(() => {
    setTitleIndex(title, upToIndex);
    return () => {
      setTitleIndex("", undefined);
    };
  }, []);
};
