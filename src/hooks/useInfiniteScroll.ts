import { useState, useEffect, useRef, useCallback } from 'react';
import axios, { Canceler } from 'axios';
import { searchItems } from '../services/spotify.service';
import { SearchResponse, Filters } from '../shared/types/spotify';

interface Params {
    q: string;
    type: Filters[];
}

export function useInfiniteScroll(params: Params) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<SearchResponse>();
    const [hasMore, setHasMore] = useState(false);
    const [offset, setOffset] = useState(0);

    const observer = useRef<IntersectionObserver>();

    const lastElement = useCallback(
        (node: HTMLDivElement) => {
            if (loading) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMore) {
                        setOffset((prevOffset) => prevOffset + 20);
                    }
                },
                {
                    threshold: 0.25,
                },
            );

            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    useEffect(() => {
        setData(undefined);

        if (params.q === '') {
            setOffset(0);
        }
    }, [params.q]);

    useEffect(() => {
        let cancel: Canceler;
        setLoading(true);
        searchItems({
            params: {
                ...params,
                offset,
            },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                setData((prevData) => ({
                    ...prevData,
                    albums: {
                        items: [
                            ...(prevData?.albums?.items || []),
                            ...(res.albums?.items || []),
                        ],
                        hasNext: Boolean(res.albums?.hasNext),
                    },
                    artists: {
                        items: [
                            ...(prevData?.artists?.items || []),
                            ...(res.artists?.items || []),
                        ],
                        hasNext: Boolean(res.artists?.hasNext),
                    },
                    tracks: {
                        items: [
                            ...(prevData?.tracks?.items || []),
                            ...(res.tracks?.items || []),
                        ],
                        hasNext: Boolean(res.tracks?.hasNext),
                    },
                    playlists: {
                        items: [
                            ...(prevData?.playlists?.items || []),
                            ...(res.playlists?.items || []),
                        ],
                        hasNext: Boolean(res.playlists?.hasNext),
                    },
                }));
                setHasMore(
                    Boolean(res.albums?.hasNext) ||
                        Boolean(res.artists?.hasNext) ||
                        Boolean(res.tracks?.hasNext) ||
                        Boolean(res.playlists?.hasNext),
                );
                setLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
            });

        return () => cancel();
    }, [params.q, offset]);

    return { loading, data, lastElement };
}
