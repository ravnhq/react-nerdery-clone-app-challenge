export const PlaylistView = ({
  entity,
}: {
  entity: SpotifyApi.PlaylistObjectFull;
}) => {
  return (
    <div>
      Playlist: {entity.name}
      <hr />
      <code>{JSON.stringify(entity.tracks, null, 2)}</code>
    </div>
  );
};
