import { useCallback, useEffect, useState } from 'react';

export function useAsync<T>(cb: () => Promise<T>, dependencies = []) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<T>();

    const callback = useCallback(() => {
        setLoading(true);
        setError(null);
        setData(undefined);

        cb()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, dependencies);

    useEffect(() => {
        callback();
    }, [callback]);

    return { loading, error, data };
}
