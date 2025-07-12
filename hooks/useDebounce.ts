import { useEffect, useState } from "react";

const useDebounce = ({ query }: { query: string }) => {
  const [debounceQuery, setDebounceQuery] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(query);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return { debounceQuery };
};

export default useDebounce;
