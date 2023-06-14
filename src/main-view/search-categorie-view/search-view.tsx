import styled from 'styled-components';
import { Heading2 } from '../../shared/ui/heading2';
import { Flex } from '../../shared/ui/flex';
import { useAsync } from '../../hooks/useAsync';
import { getCategories } from '../../services/http-spotify-api';
import { colors } from '../../hooks/useRandomColor';
import { SPOTIFY_GENRE_URL } from '../../shared/constants/app';

export const SearchTitleContainer = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

export const GenresContainer = styled.div`
  margin-top: 15px;
  --default-size: 190px;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(var(--default-size), 1fr));

  /* grid-auto-rows: auto; */
  /* grid-template-rows: 1fr; */
`;

export const CategorieCard = styled.a`
  background-color: gray;
  border: none;
  border-radius: 8px;
  width: 100%;
  /* min-width: 150px;
  
  max-width: 220px; */
  min-height: var(--default-size);
  max-height: var(--default-size);
  overflow: hidden;
  color: var(--base);
  position: relative;

  span {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    font-size: 1.5rem;
    font-weight: 700;
    color: inherit;

    padding: 16px;
    position: absolute;
  }

  img {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    height: 100px;
    position: absolute;
    width: 100px;

    transform: rotate(25deg) translate(18%, -2%);

    object-fit: cover;
    object-position: center center;

    bottom: 0;
    right: 0;

    overflow: clip;
    overflow-clip-margin: content-box;
  }
`;

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

function SearchCategorieView() {
  const { value: categories } = useAsync(getCategories);
  return (
    <Flex direction="column" padding="15px 32px">
      <SearchTitleContainer>
        <Heading2>Browse all</Heading2>
      </SearchTitleContainer>

      <GenresContainer>
        {categories?.map(categorie => (
          <CategorieCard
            href={`${SPOTIFY_GENRE_URL}/${categorie.id}`}
            style={{ backgroundColor: getRandomColor() }}
            key={categorie.id}
          >
            <span>{categorie.name}</span>
            <img src={categorie?.image?.url} alt={categorie.name} />
          </CategorieCard>
        ))}
      </GenresContainer>
    </Flex>
  );
}

export { SearchCategorieView };
