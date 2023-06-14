import { Flex } from '../../shared/ui/flex';

export const ArtistView = ({
  entity,
}: {
  entity: SpotifyApi.ArtistObjectFull;
}) => {
  return (
    <Flex width="100%" direction="column" padding="48px">
      <div>
        <b>Popularity:</b> {entity.popularity}
      </div>
      <div>
        <b>Genres: </b>
        {entity.genres.join(', ')}
      </div>
    </Flex>
  );
};
