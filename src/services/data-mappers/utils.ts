import { DEFAULT_SONG_URL } from '../../shared/constants/app';

export const joinArtists = (artists: SpotifyApi.ArtistObjectSimplified[]) =>
  artists.length < 3
    ? artists.map(artist => artist.name).join(', ')
    : 'Varios Artistas';

export const getFirstImageOrDefault = (images: SpotifyApi.ImageObject[]) =>
  images.at(0) ?? DEFAULT_SONG_URL;

export const getYear = (date: string) => date.split('-')[0];

export const generateAlbumDescription = (
  album: SpotifyApi.AlbumObjectSimplified,
) => `${getYear(album.release_date)} • ${joinArtists(album.artists)}`;

export const sectionsDisplayNames: Record<
  keyof SpotifyApi.SearchResponse,
  string
> = {
  artists: 'Artists',
  tracks: 'Tracks',
  playlists: 'Playlists',
  shows: 'Shows',
  episodes: 'Episodes',
  albums: 'Albums',
};
