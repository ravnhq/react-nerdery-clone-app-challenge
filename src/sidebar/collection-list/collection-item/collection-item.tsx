import styled from 'styled-components';
import { PlaylistIcon } from '../styles';
import { LibraryItem } from '../../../shared/types/library-item';
import { ownPlaylistImg } from '../../../assets/images';
import { getFirstImageOrDefault } from '../../../services/data-mappers/utils';
import { SpotifyEntityType } from '../../../shared/types/spotify-entities';
import { useNavigate } from 'react-router-dom';

const CollectionItemContainer = styled.div`
  display: flex;
  padding: 8px;
  color: var(--base);
  cursor: pointer;
  gap: 8px;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const CollectionItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  word-break: break-all;
  outline: none;
  font-weight: 400;
  text-overflow: ellipsis;
  text-decoration: none;
  p {
    overflow: hidden;
    font-size: 1rem;
  }

  span {
    overflow: hidden;
    font-size: 0.875rem;
    color: var(--sub);
    text-transform: capitalize;
  }
`;

interface AuthCollectionItemProps extends LibraryItem {
  onContextMenu?: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

export const AuthCollectionItem = ({
  entity,
  onContextMenu,
}: AuthCollectionItemProps) => {
  const imageURL =
    entity.type === SpotifyEntityType.OWN_PLAYLIST
      ? entity.image ?? ownPlaylistImg
      : getFirstImageOrDefault(entity.images).url;

  const navigate = useNavigate();

  return (
    <CollectionItemContainer
      onContextMenu={onContextMenu}
      onClick={() => navigate(`/entity/${entity.type}/${entity.id}`)}
    >
      <PlaylistIcon size={48} borderRadius={4}>
        <img width="100%" height="100%" src={imageURL} alt="" />
      </PlaylistIcon>
      <CollectionItemDetails>
        <p>{entity.name}</p>
        <span>
          {entity.type}
          {entity.type === SpotifyEntityType.OWN_PLAYLIST &&
          entity.items.length > 0
            ? ` - ${entity.items.length} items`
            : null}
        </span>
      </CollectionItemDetails>
    </CollectionItemContainer>
  );
};
