import { useLibrary } from '../hooks/useLibrary';
import { LibraryItem, LibraryItemId } from '../shared/types/library-item';
import { SpotifyEntityType } from '../shared/types/spotify-entities';
import { StyledMenu } from './styles';
import { ContextMenuProps } from './types';

interface LibraryContextMenuProps
  extends Omit<ContextMenuProps<LibraryItem>, 'buttons'> {
  editAction: (id: LibraryItemId) => void;
}

export const LibraryContextMenu = ({
  positionX,
  positionY,
  isToggled,
  menuRef,
  targetedItem,
  editAction,
}: LibraryContextMenuProps) => {
  const { addOwnPlaylist, remove } = useLibrary();

  return (
    <StyledMenu
      left={positionX}
      top={positionY}
      visible={isToggled}
      ref={menuRef}
      className={isToggled ? 'active' : ''}
    >
      <button onClick={addOwnPlaylist}> Create new Playlist </button>
      {targetedItem ? (
        <>
          {targetedItem.entity.type === SpotifyEntityType.OWN_PLAYLIST ? (
            <button onClick={() => editAction(targetedItem.id)}> Edit </button>
          ) : null}
          <button onClick={() => remove(targetedItem.id)}> Remove </button>
        </>
      ) : null}
    </StyledMenu>
  );
};
