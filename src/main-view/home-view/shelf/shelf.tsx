import styled from 'styled-components';
import { Flex } from '../../../shared/ui/flex';
import { SectionItem } from '../../../shared/types/section-item';
import {
  ShelfSection,
  ShelfTitleContainer,
  ShelfLinkContainer,
} from './styles';
import { ShelfCard, ShelfCardsContainer } from './shelf-card';

interface ShelfProps {
  title: string;
  shelfLink: string;
  items: SectionItem[];
  className?: string;
  uri: string;
}

const Shelf = ({ title, shelfLink, items, className, uri }: ShelfProps) => (
  <ShelfSection className={className}>
    <Flex margin="0 0 16px">
      <ShelfTitleContainer>
        <h2>
          <a href={shelfLink}>{title}</a>
        </h2>
      </ShelfTitleContainer>
      <ShelfLinkContainer>
        <a href={uri}>Mostrar todos</a>
      </ShelfLinkContainer>
    </Flex>
    <ShelfCardsContainer
      gridGap={24}
      columnCount={6}
      minContainerWidth={372}
      columnWidth={174}
    >
      {items.slice(0, 6).map(item => (
        <ShelfCard key={item.uri}>
          <div className="portrait">
            <img src={item.image.url} alt={item.name} />
          </div>
          <div className="card-text">
            <a href={`/song/${item.uri}`}>{item.name}</a>
            <div>{item.description}</div>
          </div>
        </ShelfCard>
      ))}
    </ShelfCardsContainer>
  </ShelfSection>
);

export const ContainedShelf = styled(Shelf)`
  flex: 1 1 auto;
  flex-basis: 100%;
`;
