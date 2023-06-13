/* eslint-disable no-console */
import { useCallback, useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = <T>(
  fetchFunction: (page: number) => Promise<T[]>,
) => {
  const [page, setPage] = useState(0);

  const [items, setItems] = useState<T[]>([]);
  const bottomPageRef = useRef<HTMLDivElement>(null);

  console.log('useInfinite Scroll instanciated');

  const makeRequest = useCallback(() => {
    fetchFunction(page).then(data => {
      console.log('updating states after response ', page, data);
      setItems(i => [...i, ...(data ?? [])]);

      setPage(p => p + 1);
    });
  }, [fetchFunction, page]);

  useEffect(() => {
    const { current: bottomPage } = bottomPageRef;

    if (!bottomPage) throw Error('bottomPage Ref not assigned');

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('observer created', entry);
        if (entry.isIntersecting) {
          console.log('intersected!');
          makeRequest();
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(bottomPage);
    return () => {
      observer.unobserve(bottomPage);
    };
  }, [makeRequest, bottomPageRef]);

  // useEffect(() => {
  //   setItems([]);
  //   setPage(0);
  // }, [fetchFunction]);

  const reset = useCallback(() => {
    setItems([]);
    setPage(0);
  }, []);

  return { page, items, bottomPageRef, reset };
};
