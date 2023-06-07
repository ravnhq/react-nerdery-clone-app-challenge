import { AllSpotifyObjects } from '../shared/types/spotify-objects';
import { StyledMenu } from './styles';
import { ContextMenuProps } from './types';

export const ContextMenu = ({
  buttons,
  targetedItem,
  positionX,
  positionY,
  isToggled,
  menuRef,
}: ContextMenuProps<AllSpotifyObjects>) => {
  return (
    <StyledMenu
      left={positionX}
      top={positionY}
      visible={isToggled}
      ref={menuRef}
    >
      {buttons.map(({ text, action }) => {
        return (
          <button
            key={text}
            onClick={e => {
              e.stopPropagation();
              if (targetedItem) action(e, targetedItem);
            }}
          >
            {text}
          </button>
        );
      })}
    </StyledMenu>
  );
};
