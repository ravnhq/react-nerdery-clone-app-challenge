import { Playlist } from './playlist';

export type AllColectableSpotifyObjects =
  | SpotifyApi.AlbumObjectSimplified
  | SpotifyApi.PlaylistObjectSimplified
  | SpotifyApi.ShowObjectSimplified
  | Playlist;

export type AllSpotifyObjects =
  | AllColectableSpotifyObjects
  | SpotifyApi.TrackObjectSimplified;
