import { Flex } from '../../shared/ui/flex';
import { useAsync } from '../../hooks/useAsync';
import { getSections } from '../../services/axios/http-spotify-api';
import { ContainedShelf } from './shelf/shelf';
import { HomeDiv, LightDiv, StyledMain } from './styles';

function HomeView() {
  const { value: sections } = useAsync(getSections);
  return (
    <HomeDiv>
      <div className="header-spacer" />
      <StyledMain>
        <LightDiv style={{ backgroundColor: 'rgb(83, 83, 83)' }} />
        <Flex
          padding="24px var(--content-spacing) 0px;"
          direction="row"
          wrap="wrap"
          gap="24px"
        >
          {sections?.map(section => (
            <ContainedShelf
              key={section.uri}
              uri={section.uri}
              title={section.title}
              shelfLink={section.uri}
              items={section.items}
            />
          ))}
        </Flex>
      </StyledMain>
    </HomeDiv>
  );
}

export { HomeView };
