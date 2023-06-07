import { MouseEvent } from 'react';

export interface ContextMenuItem<T> {
  text: string;
  action: (e: MouseEvent<HTMLButtonElement>, item: T) => void;
}

export interface ContextMenuProps<T> {
  buttons: ContextMenuItem<T>[];
  targetedItem?: T | null;
  positionX: number;
  positionY: number;
  isToggled: boolean;
  menuRef: React.RefObject<HTMLElement>;
}
