import { useSearchParams } from "next/navigation";

export const useCurrentSearchParams = () => {
  const searchParams = useSearchParams();

  const getQuery = () =>
    new URLSearchParams(Array.from(searchParams.entries()));

  const current = getQuery();

  return current;
};
