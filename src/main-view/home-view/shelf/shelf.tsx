import styled from 'styled-components';
import { Flex } from '../../../shared/ui/flex';
import { SectionItem } from '../../../shared/types/section-item';
import {
  ShelfSection,
  ShelfTitleContainer,
  ShelfLinkContainer,
} from './styles';
import { Heading2 } from '../../../shared/ui/heading2';
import { ShelfCardList } from './shelf-card-list';

interface ShelfProps {
  title: string;
  shelfLink?: string;
  items: SectionItem[];
  className?: string;
  uri?: string;
}

const Shelf = ({ title, shelfLink, items, className }: ShelfProps) => {
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
      <ShelfCardList items={items} />
    </ShelfSection>
  );
};

export const StyledShelf = styled(Shelf)`
  flex: 1 1 auto;
  flex-basis: 100%;
`;
