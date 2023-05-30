import { useState, useEffect } from 'react';
import axios, { Canceler } from 'axios';
import { searchTracksPaginated } from '../services/spotify.service';

interface Params<T> {
    callback: Promise<T>;
    elementRef: React.MutableRefObject<HTMLElement | null>;
    config: {
        [key: string]: unknown;
    };
}
function useInfiniteScroll(q: string, offset: number) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setData([]);
    }, [q]);

    useEffect(() => {
        let cancel: Canceler;
        searchTracksPaginated(
            q,
            { offset },
            {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            },
        )
            .then((res) => {
                setData((prevData) => {
                    return [...prevData, ...res];
                });
                setHasMore(res.length > 0);
                setLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
            });

        return () => cancel();
    }, [q, offset]);

    return { loading, data, hasMore };
}

export default useInfiniteScroll;
