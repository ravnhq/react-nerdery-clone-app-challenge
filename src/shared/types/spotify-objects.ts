import { Playlist } from './playlist';

export type AllColectableSpotifyObjects =
  | SpotifyApi.AlbumObjectSimplified
  | SpotifyApi.PlaylistObjectSimplified
  | SpotifyApi.ShowObjectSimplified
  | Playlist;

export type AllSpotifyObjects =
  | AllColectableSpotifyObjects
  | SpotifyApi.TrackObjectSimplified;

export type SearchSpotifyObjects =
  | SpotifyApi.ArtistObjectFull
  | SpotifyApi.AlbumObjectSimplified
  | SpotifyApi.TrackObjectFull
  | SpotifyApi.PlaylistObjectSimplified
  | SpotifyApi.ShowObjectSimplified
  | SpotifyApi.EpisodeObjectSimplified;

export type AllSpotifyObjectsFull =
  | SpotifyApi.ArtistObjectFull
  | SpotifyApi.AlbumObjectFull
  | SpotifyApi.PlaylistObjectFull
  | SpotifyApi.ShowObjectFull
  | SpotifyApi.TrackObjectFull
  | Playlist;
