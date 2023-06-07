import styled from 'styled-components';
import { Flex } from '../../../shared/ui/flex';
import { SectionItem } from '../../../shared/types/section-item';
import {
  ShelfSection,
  ShelfTitleContainer,
  ShelfLinkContainer,
} from './styles';
import { ShelfCard, ShelfCardsContainer } from './shelf-card';
import { Heading2 } from '../../../shared/ui/heading2';
import { SPOTIFY_APP_URL } from '../../../shared/constants/app';
import { useEntityContextMenu } from '../../../hooks/useContextMenu';

interface ShelfProps {
  title: string;
  shelfLink?: string;
  items: SectionItem[];
  className?: string;
  uri?: string;
}

const Shelf = ({ title, shelfLink, items, className }: ShelfProps) => {
  const { onContextMenu } = useEntityContextMenu(true);

  return (
    <ShelfSection className={className}>
      <Flex margin="0 0 16px">
        <ShelfTitleContainer>
          <Heading2>
            <a href={shelfLink}>{title}</a>
          </Heading2>
        </ShelfTitleContainer>
        {shelfLink && (
          <ShelfLinkContainer>
            <a href={shelfLink}>Show all</a>
          </ShelfLinkContainer>
        )}
      </Flex>
      <ShelfCardsContainer
        gridGap={24}
        columnCount={6}
        minContainerWidth={372}
        columnWidth={174}
      >
        {items.map(item => (
          <ShelfCard
            key={item.id}
            onContextMenu={e => onContextMenu(e, item.entity)}
          >
            <div className="portrait">
              <img src={item.image.url} alt={item.name} />
            </div>
            <div className="card-text">
              <a href={`${SPOTIFY_APP_URL}/${item.type}/${item.id}`}>
                <div>{item.name}</div>
              </a>
              <div>{item.description}</div>
            </div>
          </ShelfCard>
        ))}
      </ShelfCardsContainer>
    </ShelfSection>
  );
};

export const StyledShelf = styled(Shelf)`
  flex: 1 1 auto;
  flex-basis: 100%;
`;
