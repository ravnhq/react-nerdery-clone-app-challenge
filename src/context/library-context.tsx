import { PropsWithChildren, createContext, useState } from 'react';
import { LibraryItem } from '../shared/types/library-item';

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

  const addToLibrary = (item: LibraryItem) => {
    setLibrary([...library, item]);
  };

  return <LibraryContext.Provider {...props} value={[library, setLibrary]} />;
};
