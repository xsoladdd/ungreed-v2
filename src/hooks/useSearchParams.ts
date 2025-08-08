import {
  useRouter,
  useSearchParams as useNextSearchParams,
} from "next/navigation";

export const useSearchParams = () => {
  const router = useRouter();
  const searchParams = useNextSearchParams();
  const setParams = (data: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(data).forEach(([key, value]) => {
      params.set(key, value);
    });
    const queryString = params.toString();
    router.push(`?${queryString}`, { scroll: false });
  };

  const getParams = (key: string) => {
    return searchParams.get(key);
  };

  const removeParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    const queryString = params.toString();
    router.push(`?${queryString}`, { scroll: false });
  };

  return { setParams, getParams, removeParam };
};
