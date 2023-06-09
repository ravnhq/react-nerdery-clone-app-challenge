import { DEFAULT_SONG_URL } from '../../shared/constants/app';
import { Playlist } from '../../shared/types/playlist';
import { SectionItem } from '../../shared/types/section-item';
import { SpotifyEntityType } from '../../shared/types/spotify-entities';
import {
  AllSpotifyObjectsFull,
  SearchSpotifyObjects,
} from '../../shared/types/spotify-objects';
import {
  generateAlbumDescription,
  getFirstImageOrDefault,
  joinArtists,
} from './utils';

export const normalizeEntity = (
  entity: SearchSpotifyObjects | AllSpotifyObjectsFull,
): SectionItem => {
  const { type, name, id } = entity;
  switch (type) {
    case SpotifyEntityType.ARTIST:
      return {
        name,
        image: getFirstImageOrDefault(entity.images),
        description: 'Artist',
        id,
        type,
      };
    case SpotifyEntityType.ALBUM:
      return {
        name: entity.name,
        image: getFirstImageOrDefault(entity.images),
        description: `${generateAlbumDescription(entity)}`,
        id,
        type,
        entity: entity,
      };
    case SpotifyEntityType.PLAYLIST:
      return {
        name: entity.name,
        image: getFirstImageOrDefault(entity.images),
        description: `${entity.owner.display_name}`,
        id,
        type,
        entity: entity,
      };
    case SpotifyEntityType.TRACK:
      return {
        description: `${joinArtists(entity.artists)}`,
        image: getFirstImageOrDefault(entity.album.images),
        name: entity.name,
        id,
        type,
        entity: entity,
      };
    case SpotifyEntityType.OWN_PLAYLIST:
      return {
        description: 'Favorites playlist',
        image: { url: entity.image ?? DEFAULT_SONG_URL.url },
        name: entity.name,
        id: id ?? '',
        type,
        entity: entity,
      };
    default:
      return {
        description: 'default description',
        image: {
          url: 'default url',
        },
        name: 'default name',
        id: 'default-uri',
        type: 'default-type',
      };
  }
};

export const entityMapper = (entity: AllSpotifyObjectsFull) => {
  switch (entity.type) {
    case 'album':
      return entity as SpotifyApi.AlbumObjectFull;
    case 'playlist':
      return entity as SpotifyApi.PlaylistObjectFull;
    case 'show':
      return entity as SpotifyApi.ShowObjectFull;
    case 'track':
      return entity as SpotifyApi.TrackObjectFull;
    case 'ownPlaylist':
      return entity as Playlist;
    default:
      return entity as AllSpotifyObjectsFull;
  }
};
