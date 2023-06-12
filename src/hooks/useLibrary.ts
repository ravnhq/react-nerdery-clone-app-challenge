/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useContext } from 'react';
import { LibraryContext } from '../context/library-context';
import {
  addToLibrary,
  createPlaylist,
  editLibraryItem,
  removeFromLibrary,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
} from '../services/http-spotify-api';
import { useAuth } from './useAuth';
import { AllColectableSpotifyObjects } from '../shared/types/spotify-objects';
import { LibraryItem, LibraryItemId } from '../shared/types/library-item';
import { SpotifyEntityType } from '../shared/types/spotify-entities';

export const useLibrary = () => {
  const [library, setLibrary] = useContext(LibraryContext);
  const { auth } = useAuth();

  if (!auth) throw Error('useLibrary hook must be inside an AuthProvider');

  const ownPlaylists = library.filter(
    item =>
      item.entity.type === SpotifyEntityType.OWN_PLAYLIST &&
      item.entity.id !== 'favorites',
  );

  const libraryItems = library.filter(item => item.entity.id !== 'favorites');
  const favorite = library.find(item => item.entity.id === 'favorites');

  const add = (entity: AllColectableSpotifyObjects) => {
    addToLibrary({
      entity: entity,
      userId: auth.user.id,
      id: entity.id,
    })
      .then(data => {
        setLibrary([data, ...library]);
      })
      .catch(error => {
        console.log(error);
        alert('There was an error while adding the item into library');
      });
  };

  const addToPlaylistPromise = (
    track: SpotifyApi.TrackObjectSimplified,
    libraryItemId: LibraryItemId,
  ) =>
    addTrackToPlaylist(track, libraryItemId).then(data =>
      setLibrary(
        library.map(item => {
          if (item.id === data.id) {
            return data;
          }
          return item;
        }),
      ),
    );

  const addToPlaylist = (
    track: SpotifyApi.TrackObjectSimplified,
    libraryItemId: LibraryItemId,
  ) => {
    addToPlaylistPromise(track, libraryItemId).catch(error => {
      console.log(error);
      alert('There was an error while adding the item into library');
    });
  };

  const addToFavorites = (track: SpotifyApi.TrackObjectSimplified) => {
    addToPlaylistPromise(track, `favorites-${auth.user.id}`).catch(error => {
      console.log(error);
      alert('There was an error while adding the item into your favorites');
    });
  };

  const removeFromFavorites = (track: SpotifyApi.TrackObjectSimplified) => {
    removeTrackFromPlaylist(`favorites-${auth.user.id}`, track.id).then(
      data => {
        setLibrary(
          library.map(item => {
            if (item.id === data.id) {
              return data;
            }
            return item;
          }),
        );
      },
    );
  };

  const addOwnPlaylist = () => {
    createPlaylist(auth.user.id)
      .then(data => setLibrary([data, ...library]))
      .catch(error => {
        console.log(error);
        alert(
          'There was an error while creating your playlist. Please try again, later',
        );
      });
  };

  const edit = (payload: LibraryItem) => {
    editLibraryItem(payload).then(data => {
      setLibrary(
        library.map(item => {
          if (item.id === data.id) {
            return data;
          }
          return item;
        }),
      );
    });
  };

  const get = (id: LibraryItemId) => {
    return library.find(item => item.id === id);
  };

  const remove = (id: LibraryItemId) => {
    removeFromLibrary(id)
      .then(() => {
        setLibrary(library.filter(item => item.id !== id));
      })
      .catch(error => {
        console.log(error);
        alert('There was an error while removing the item into library');
      });
  };

  return {
    add,
    get,
    remove,
    favorite,
    libraryItems,
    ownPlaylists,
    addToPlaylist,
    addOwnPlaylist,
    addToFavorites,
    removeFromFavorites,
    edit,
  };
};
