import { PlusIcon } from '../../assets/icons';
import {
  CollectionContainer,
  CollectionItem,
  CollectionListContainer,
  PlaylistIcon,
} from './styles';

export const UnauthCollectionList = () => (
  <CollectionListContainer>
    <CollectionContainer>
      <CollectionItem>
        <PlaylistIcon>
          <PlusIcon />
        </PlaylistIcon>
        <span> Create Playlist</span>
      </CollectionItem>
      <CollectionItem>
        <PlaylistIcon>
          <PlusIcon />
        </PlaylistIcon>
        <span> Liked Songs</span>
      </CollectionItem>
    </CollectionContainer>
  </CollectionListContainer>
);
