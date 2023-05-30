import { useCallback, useEffect, useState } from 'react';

interface useAsyncOptions {
    dependencies: React.DependencyList;
    runOnMount: boolean;
}

export function useAsync<T>(
    cb: () => Promise<T>,
    options: useAsyncOptions = {
        dependencies: [],
        runOnMount: true,
    },
) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<T>();

    const { dependencies, runOnMount } = options;

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
        if (runOnMount) {
            callback();
        }
    }, [callback]);

    return { loading, error, data, callback };
}
