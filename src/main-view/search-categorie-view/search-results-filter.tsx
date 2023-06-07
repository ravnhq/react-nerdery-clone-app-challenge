import { useParams } from 'react-router';
import { useAsync } from '../../hooks/useAsync';
import { searchAll } from '../../services/http-spotify-api';
import { StyledShelf } from '../home-view/shelf';
import { TagGroup } from '../../shared/ui/tag-group';
import { useNavigate } from 'react-router-dom';
import { getTagsSearchFilters } from './utils';
import { useEffect } from 'react';
import { SEARCH_ROUTE } from '../../shared/constants/router';
import styled from 'styled-components';

export const ResultsFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  --auto-rows: 1fr;
  --row-gap: 30px;
`;

export const SearchResultsFilter = () => {
  const { text, filter } = useParams();
  const navigate = useNavigate();

  const searchFilterQuery = `${text}?type=${filter}`;
  const {
    value: searchSections,
    pending,
    reSync,
  } = useAsync(searchAll, searchFilterQuery);

  useEffect(() => {
    reSync(searchFilterQuery);
  }, [reSync, searchFilterQuery]);

  return (
    <ResultsFilterContainer>
      <TagGroup
        items={getTagsSearchFilters}
        action={item => navigate(`${SEARCH_ROUTE}/${text}/${item}`)}
        selected={filter ?? ''}
      />
      {pending ? (
        <div>Loading...</div>
      ) : (
        searchSections &&
        searchSections.map(section =>
          section.items.length > 0 ? (
            <StyledShelf
              key={section.uri}
              title={section.title}
              items={section.items}
            />
          ) : null,
        )
      )}
    </ResultsFilterContainer>
  );
};
