import { useEffect, useState } from "react";
import { Place } from "../modules/shared/types/types";

const useInfiniteScroll = (
  queryFn: (args: number) => Promise<Place[]>
): {
  data: Place[] | null;
  getNext: (reset?: boolean) => void;
  hasNextPage: boolean;
  error: string;
  loading: boolean;
} => {
  const [data, setData] = useState<Place[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [singleReset, setSingleReset] = useState(false);

  const asyncCallback = async () => {
    try {
      const response = await queryFn(page);
      setLoading(false);
      setData(response);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    }
  };

  const getNext = async (reset?: boolean) => {
    if (reset === true) {
      setData([]);
      if (page === 1) {
        setSingleReset((prevSingleReset) => !prevSingleReset);
      } else {
        setPage(1);
      }
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const getNextPage = async () => {
    try {
      const response = await queryFn(page);
      if (Array.isArray(data)) {
        if (response.length === 0) {
          setHasNextPage(false);
        }
        setData([...data, ...response]);
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    }
  };

  useEffect(() => {
    getNextPage();
  }, [page, singleReset]);

  useEffect(() => {
    asyncCallback();
  }, []);
  return { data, hasNextPage, getNext, error, loading };
};
export default useInfiniteScroll;
