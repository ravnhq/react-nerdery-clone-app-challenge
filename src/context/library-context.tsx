/* eslint-disable no-alert */
/* eslint-disable no-console */

import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { LibraryItem } from '../shared/types/library-item';
import { getLibraryItems } from '../services/http-spotify-api';
import { useAuth } from '../hooks/useAuth';

type Library = LibraryItem[];

type LibraryDispatch = (arg: Library) => void;

type LibraryValueDispatch = [Library, LibraryDispatch];

const defaultLibrary = [] as Library;

const defaultLibraryContext: LibraryValueDispatch = [
  defaultLibrary,
  (_: Library) => {
    _.at(0);
  },
];

export const LibraryContext = createContext<LibraryValueDispatch>(
  defaultLibraryContext,
);

export const LibraryProvider = (props: PropsWithChildren) => {
  const [library, setLibrary] = useState<Library>([]);
  const { auth } = useAuth();

  if (!auth) throw Error('useLibrary hook must be inside an AuthProvider');

  useEffect(() => {
    getLibraryItems(auth.user.id)
      .then(data => {
        setLibrary(data);
      })
      .catch(error => {
        console.log(error);
        alert('There was an error while fetching the items into library');
      });
  }, [auth.user.id, setLibrary]);

  return <LibraryContext.Provider {...props} value={[library, setLibrary]} />;
};
