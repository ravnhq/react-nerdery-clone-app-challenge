import { useParams } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getEntity } from '../../services/http-spotify-api';
import {
  EntityDataContainer,
  EntityName,
  EntityType,
  ImageContainer,
} from './styles';
import { normalizeEntity } from '../../services/data-mappers/entity-mapper';
import { Flex } from '../../shared/ui/flex';
import { AllSpotifyObjectsFull } from '../../shared/types/spotify-objects';
import { AlbumView } from './album';
import { ArtistView } from './artist';
import { PlaylistView } from './playlist';
import { TrackView } from './track';
import { OwnPlaylistView } from './own-playlist';

const getViewByEntityType = (entity: AllSpotifyObjectsFull) => {
  switch (entity.type) {
    case 'album':
      return <AlbumView entity={entity} />;
    case 'artist':
      return <ArtistView entity={entity} />;
    case 'playlist':
      return <PlaylistView entity={entity} />;
    case 'ownPlaylist':
      return <OwnPlaylistView entity={entity} />;
    case 'track':
      return <TrackView entity={entity} />;
    default:
      return null;
  }
};

export const SingleItemView = () => {
  const params = useParams();
  const { id, type } = params;

  const { value: entity, pending, error } = useAsync(getEntity, type, id);

  if (error) {
    return <h1>Error: {JSON.stringify(error?.message, null, 2)}</h1>;
  }

  if (!entity || pending) return <h1>Loading...</h1>;

  const normalizedEntity = normalizeEntity(entity);

  const ContentView = getViewByEntityType(entity);

  return (
    <Flex width="100%" direction="column">
      <ImageContainer $img={normalizedEntity.image.url}>
        <EntityDataContainer>
          <EntityType>{normalizedEntity.type}</EntityType>
          <EntityName>{normalizedEntity.name}</EntityName>
        </EntityDataContainer>
      </ImageContainer>
      {ContentView}
    </Flex>
  );
};
