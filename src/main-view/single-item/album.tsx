import { DEFAULT_SONG_URL } from '../../shared/constants/app';
import { SectionItem } from '../../shared/types/section-item';
import { ShelfCardList } from '../home-view/shelf/shelf-card-list';

const getItems = (entity: SpotifyApi.AlbumObjectFull): SectionItem[] => {
  return entity.tracks.items.map(item => {
    return {
      id: item.id,
      name: item.name,
      uri: item.uri,
      image: DEFAULT_SONG_URL,
      description: 'Track',
    };
  });
};

export const AlbumView = ({
  entity,
}: {
  entity: SpotifyApi.AlbumObjectFull;
}) => {
  return (
    <div>
      <ShelfCardList items={getItems(entity)} />
    </div>
  );
};
