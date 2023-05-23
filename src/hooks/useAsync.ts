import { useCallback, useEffect, useState } from 'react';

function useAsync<T>(cb: () => Promise<T>, dependencies = []) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<T | null>(null);

    const callback = useCallback(() => {
        setLoading(true);
        setError(null);
        setData(null);

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

export default useAsync;
