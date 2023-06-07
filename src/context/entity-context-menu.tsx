import { PropsWithChildren, createContext, useState } from 'react';
import { ContextState } from '../hooks/useContextMenu';
import { AllSpotifyObjects } from '../shared/types/spotify-objects';

type EntityContextMenuState<T> = ContextState<T>;

type ContextDispatch<T> = (arg: EntityContextMenuState<T>) => void;

export type ContextMenuValueDispatch<T> = [
  EntityContextMenuState<T>,
  ContextDispatch<T>,
];

const defaultContextState = {
  isToggled: false,
  x: 0,
  y: 0,
};

const defaultContextMenuState: ContextMenuValueDispatch<AllSpotifyObjects> = [
  defaultContextState,
  _ => {
    return;
  },
];
export const EntityMenuContext = createContext<
  ContextMenuValueDispatch<AllSpotifyObjects>
>(defaultContextMenuState);

// eslint-disable-next-line comma-spacing
export const EntityContextMenuProvider = (props: PropsWithChildren) => {
  const [contextMenu, setContextMenu] =
    useState<EntityContextMenuState<AllSpotifyObjects>>(defaultContextState);

  return (
    <EntityMenuContext.Provider
      {...props}
      value={[contextMenu, setContextMenu]}
    />
  );
};
