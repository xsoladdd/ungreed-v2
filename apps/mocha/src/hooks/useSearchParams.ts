import {
  usePathname,
  useRouter,
  useSearchParams as useSearchParamsBase,
} from "next/navigation";
import { useCallback } from "react";

// Define the type for the useToggle hook
// eslint-disable-next-line no-unused-vars
type useSearchParamsReturnType = [string | null, (id?: string) => void];

// Define the useToggle hook
const useSearchParams = (searchKey: string): useSearchParamsReturnType => {
  const searchParams = useSearchParamsBase();
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

  const state = getParams;
  const toggle = (id?: string) => {
    if (id) {
      router.push(pathname + "?" + createQueryString(searchKey, id));
    } else {
      router.push(pathname + "?" + deleteParamQueryString(searchKey));
    }
  };
  return [state, toggle];
};

export default useSearchParams;
