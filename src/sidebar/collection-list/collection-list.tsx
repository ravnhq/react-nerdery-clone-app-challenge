import { PlusIcon } from '../../assets/icons';
import {
  CollectionContainer,
  CollectionItem,
  CollectionListContainer,
  PlaylistIcon,
} from './styles';

export const CollectionList = () => (
  <CollectionListContainer>
    <CollectionContainer>
      <CollectionItem>
        <PlaylistIcon>
          <PlusIcon />
        </PlaylistIcon>
        <span> Crear Lista</span>
      </CollectionItem>
      <CollectionItem>
        <PlaylistIcon>
          <PlusIcon />
        </PlaylistIcon>
        <span> Canciones que te gustan</span>
      </CollectionItem>
    </CollectionContainer>
  </CollectionListContainer>
);
