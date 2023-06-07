export interface Playlist {
  id?: string;
  name: string;
  items: SpotifyApi.TrackObjectSimplified[];
  type: 'ownPlaylist';
}
