export const TrackView = ({
  entity,
}: {
  entity: SpotifyApi.TrackObjectFull;
}) => {
  return (
    <div>
      Track: {entity.name}
      <hr />
      <code>{JSON.stringify(entity, null, 2)}</code>
    </div>
  );
};
