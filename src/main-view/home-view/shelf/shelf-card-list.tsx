import { useNavigate } from 'react-router-dom';
import { useEntityContextMenu } from '../../../hooks/useContextMenu';
import { SPOTIFY_APP_URL } from '../../../shared/constants/app';
import { SectionItem } from '../../../shared/types/section-item';
import { ShelfCard, ShelfCardsContainer } from './shelf-card';

interface ShelfCardListProps {
  items: SectionItem[];
  expanded?: boolean;
}

export const ShelfCardList = ({ items, expanded }: ShelfCardListProps) => {
  const { onContextMenu } = useEntityContextMenu(true);
  const navigate = useNavigate();

  return (
    <ShelfCardsContainer
      gridGap={24}
      columnCount={6}
      minContainerWidth={372}
      columnWidth={174}
      expanded={expanded}
    >
      {items.map(item => (
        <ShelfCard
          key={item.id}
          onContextMenu={e => onContextMenu(e, item.entity)}
          onClick={() => navigate(`/entity/${item.type}/${item.id}`)}
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
  );
};
