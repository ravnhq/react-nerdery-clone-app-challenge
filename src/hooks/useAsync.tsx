import { useEffect, useState } from "react";

//how to put the args like this callbackargs or another way
const useAsync = <T, A>(
  asyncCallback: (args?: A) => Promise<T>
): {
  data: T | null;
  error: unknown;
  loading: boolean;
  resync: (args?: A) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const resync = async (args?: A) => {
    try {
      //const response = await currentConsumer<T>(URL);
      const response = args ? await asyncCallback(args) : await asyncCallback();
      setData(response);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError(String(error));
    }
  };
  useEffect(() => {
    setLoading(true);
    resync();
  }, []);

  return { data, error, loading, resync };
};

export default useAsync;
