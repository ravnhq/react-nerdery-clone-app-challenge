import { useParams } from 'react-router';
import { useAsync } from '../../hooks/useAsync';
import { searchAll } from '../../services/http-spotify-api';
import { StyledShelf } from '../home-view/shelf';
import { Flex } from '../../shared/ui/flex';
import { TagGroup } from '../../shared/ui/tag-group';
import { useNavigate } from 'react-router-dom';
import { getTagsSearchFilters } from './utils';
import { useEffect } from 'react';

export const SearchResultsView = () => {
  const { text } = useParams();
  const navigate = useNavigate();

  const isTextParamPresent = !!text;
  if (!isTextParamPresent) throw Error("There's not a search content on url");
  const { value: searchSections, pending, reSync } = useAsync(searchAll, text);

  useEffect(() => {
    reSync(text);
  }, [reSync, text]);
  return (
    <Flex direction="column" margin="20px">
      <TagGroup
        items={getTagsSearchFilters}
        action={item => navigate(item)}
        selected=""
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
    </Flex>
  );
};
