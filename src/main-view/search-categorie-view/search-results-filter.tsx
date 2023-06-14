/* eslint-disable no-console */
import { useLocation, useParams } from 'react-router';
import { searchWithFilter } from '../../services/http-spotify-api';
import { TagGroup } from '../../shared/ui/tag-group';
import { useNavigate } from 'react-router-dom';
import { getTagsSearchFilters } from './utils';
import { useEffect } from 'react';
import { SEARCH_ROUTE } from '../../shared/constants/router';
import styled from 'styled-components';
import { ShelfCard, ShelfCardsContainer } from '../home-view/shelf/shelf-card';
import { useEntityContextMenu } from '../../hooks/useContextMenu';
import { SPOTIFY_APP_URL } from '../../shared/constants/app';
import { useInfiniteScroll } from './useInfiniteScroll';

export const ResultsFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  --row-gap: 30px;
`;

const DEFAULT_LIMIT = 20;

// const getOffset = (page: number, limit: number = DEFAULT_LIMIT) => page * limit;

export const SearchResultsFilter = () => {
  const { text, filter } = useParams();

  const { state } = useLocation();

  if (!text || !filter) throw Error("There's not a search content on url");

  const navigate = useNavigate();

  const { onContextMenu } = useEntityContextMenu(true);

  const searchRequest = (requestPage: number) => {
    console.log('search Request', requestPage);

    return searchWithFilter(text, filter, requestPage * DEFAULT_LIMIT);
  };

  console.log('text changed', state);

  const { items, bottomPageRef, reset } = useInfiniteScroll(searchRequest);

  console.log({ items });

  useEffect(() => {
    console.log('cambiaste bro', state);
    reset();
  }, [reset, state]);

  return (
    <ResultsFilterContainer>
      <TagGroup
        items={getTagsSearchFilters}
        action={item => navigate(`${SEARCH_ROUTE}/${text}/${item}`)}
        selected={filter ?? ''}
      />
      <ShelfCardsContainer
        gridGap={24}
        columnCount={6}
        minContainerWidth={372}
        columnWidth={174}
        expanded
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
      {/* {pending && <div>Loading...</div>} */}
      <div ref={bottomPageRef} />
    </ResultsFilterContainer>
  );
};
