import { DEFAULT_SONG_URL } from '../../shared/constants/app';
import { Playlist } from '../../shared/types/playlist';
import { SectionItem } from '../../shared/types/section-item';
import { ShelfCardList } from '../home-view/shelf/shelf-card-list';

const getItems = (entity: Playlist): SectionItem[] => {
  return entity.items.map(item => {
    return {
      id: item.id,
      name: item.name,
      uri: item.uri,
      image: DEFAULT_SONG_URL,
      description: 'Track',
    };
  });
};

export const OwnPlaylistView = ({ entity }: { entity: Playlist }) => {
  return <ShelfCardList items={getItems(entity)} />;
};
