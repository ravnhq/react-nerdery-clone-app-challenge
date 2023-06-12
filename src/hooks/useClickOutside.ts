import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export function useClickOutside<T extends HTMLElement>(
    onClickOutside: () => void,
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as T)) {
                onClickOutside();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return ref;
}
