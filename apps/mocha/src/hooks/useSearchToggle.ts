import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

// Define the type for the useToggle hook
// eslint-disable-next-line no-unused-vars
type UseToggleReturnType = [boolean, (status?: boolean) => void];

// Define the useToggle hook
const useSearchToggle = (searchKey: string): UseToggleReturnType => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const deleteParamQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  const router = useRouter();

  const getParams = searchParams.get(searchKey);

  const state = getParams ? true : false;
  const toggle = (status?: boolean) => {
    if (status == true) {
      router.push(
        pathname +
          "?" +
          createQueryString(searchKey, status ? status.toString() : "false")
      );
    } else {
      router.push(pathname + "?" + deleteParamQueryString(searchKey));
    }
  };
  return [state, toggle];
};

export default useSearchToggle;
