export const ShowView = ({ entity }: { entity: SpotifyApi.ShowObjectFull }) => {
  return (
    <div>
      Show: {entity.name}
      <hr />
      <code>{JSON.stringify(entity.episodes, null, 2)}</code>
    </div>
  );
};
