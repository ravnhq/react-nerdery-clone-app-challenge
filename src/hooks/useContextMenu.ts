import {
  useEffect,
  useState,
  MouseEvent,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { EntityMenuContext } from '../context/entity-context-menu';
import { AllSpotifyObjects } from '../shared/types/spotify-objects';

export interface ContextState<T> {
  isToggled: boolean;
  x: number;
  y: number;
  extraData?: T;
}

const defaultContextState = {
  isToggled: false,
  x: 0,
  y: 0,
};

export const useContextMenu = <T>(
  persistExtraData = false,
  customState?: {
    context: ContextState<T>;
    setContext: Dispatch<SetStateAction<ContextState<T>>>;
  },
) => {
  let state = useState<ContextState<T>>(defaultContextState);

  if (customState) {
    state = [customState.context, customState.setContext];
  }
  const [context, setContext] = state;

  const resetContextMenu = () => {
    if (persistExtraData === true) {
      setContext({ ...defaultContextState, extraData: context.extraData });
    } else {
      setContext(defaultContextState);
    }
  };

  const toggle = () => {
    setContext({ ...context, isToggled: !context.isToggled });
  };

  const onContextMenu = (e: MouseEvent<Element>, extraData?: T) => {
    e.preventDefault();
    setContext({
      isToggled: true,
      x: e.pageX + 2,
      y: e.pageY + 2,
      extraData,
    });
  };

  useEffect(() => {
    function handler() {
      resetContextMenu();
    }

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  });

  return { context, setContext, resetContextMenu, toggle, onContextMenu };
};

export const useEntityContextMenu = (persistExtraData = false) => {
  const entityMenuContext = useContext(EntityMenuContext);
  if (!entityMenuContext) {
    throw new Error(
      'useEntityContextMenu must be used within a EntityMenuContextProvider',
    );
  }
  const [contextState, setContextState] = entityMenuContext;
  const useContextMenuHook = useContextMenu(persistExtraData, {
    context: contextState as ContextState<AllSpotifyObjects>,
    setContext: setContextState as Dispatch<
      SetStateAction<ContextState<AllSpotifyObjects>>
    >,
  });

  return useContextMenuHook;
};
