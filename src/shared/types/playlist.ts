export interface Playlist {
  id?: string;
  name: string;
  image?: string;
  items: SpotifyApi.TrackObjectSimplified[];
  type: 'ownPlaylist';
}
