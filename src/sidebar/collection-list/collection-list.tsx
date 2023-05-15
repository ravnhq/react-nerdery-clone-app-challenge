import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';

import styled from 'styled-components';

const CollectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  margin-top: 24px;
  position: relative;
`;

const CollectionContainer = styled(CollectionListContainer)`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const CollectionItem = styled.div`
  display: flex;
  gap: 16px;
  min-height: max-content;
  padding: 8px var(--sidebar-padding-right) 8px var(--sidebar-padding-left);
  opacity: 0.7;
  transition: opacity 0.2s linear;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 0.875rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    font-weight: 700;
  }
`;

const PlaylistIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 2px;
`;

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
