import { useLibrary } from '../hooks/useLibrary';
import { SpotifyEntityType } from '../shared/types/spotify-entities';
import { AllSpotifyObjects } from '../shared/types/spotify-objects';
import { ButtonContainer, StyledMenu } from './styles';
import { ContextMenuProps } from './types';

const permitedTypes = ['playlist', 'album', 'show', 'track'];

export const ItemContextMenu = ({
  positionX,
  positionY,
  isToggled,
  menuRef,
  targetedItem,
}: Omit<ContextMenuProps<AllSpotifyObjects>, 'buttons'>) => {
  const { add, ownPlaylists, addToPlaylist } = useLibrary();

  return (
    <StyledMenu
      left={positionX}
      top={positionY}
      visible={isToggled}
      ref={menuRef}
      className={isToggled ? 'active' : ''}
    >
      {targetedItem && permitedTypes.includes(targetedItem.type) ? (
        <>
          {targetedItem.type === SpotifyEntityType.TRACK ? (
            <>
              <button onClick={() => addToPlaylist(targetedItem, 'favorites')}>
                Add to liked songs
              </button>
              <span> Add to playlist:</span>
              <ButtonContainer>
                {ownPlaylists.map((item, idx) => (
                  <button
                    onClick={() => addToPlaylist(targetedItem, item.id)}
                    key={idx}
                  >
                    Add to {item.entity.name}
                  </button>
                ))}
              </ButtonContainer>
            </>
          ) : (
            <button onClick={() => add(targetedItem)}> Add to library</button>
          )}
        </>
      ) : (
        <span>No actions available</span>
      )}
    </StyledMenu>
  );
};
