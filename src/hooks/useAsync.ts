import { useCallback, useEffect, useState } from 'react';

function instantiateError(error: unknown) {
  let thisWillBeAnError;
  if (error instanceof Error) thisWillBeAnError = error;
  else thisWillBeAnError = Error(String(error));
  return thisWillBeAnError;
}

export const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [value, setValue] = useState<T | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const reSync = useCallback(() => {
    setPending(true);
    setError(null);
    return asyncFunction()
      .then(response => setValue(response))
      .catch(promiseError => {
        setError(instantiateError(promiseError));
      })
      .finally(() => {
        setPending(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    reSync();
  }, [reSync]);

  return { value, pending, error, setValue, reSync };
};
