/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useContext, useEffect } from 'react';
import { LibraryContext } from '../context/library-context';
import {
  addToLibrary,
  createPlaylist,
  editLibraryItem,
  getLibraryItems,
  removeFromLibrary,
  addTrackToPlaylist,
} from '../services/http-spotify-api';
import { useAuth } from './useAuth';
import { AllColectableSpotifyObjects } from '../shared/types/spotify-objects';
import { LibraryItem, LibraryItemId } from '../shared/types/library-item';
import { SpotifyEntityType } from '../shared/types/spotify-entities';

export const useLibrary = () => {
  const [library, setLibrary] = useContext(LibraryContext);
  const { auth } = useAuth();
  if (!auth) throw Error('Must be inside an AuthProvider');

  const ownPlaylists = library.filter(
    item => item.entity.type === SpotifyEntityType.OWN_PLAYLIST,
  );

  useEffect(() => {
    getLibraryItems(auth.user.id)
      .then(data => {
        setLibrary(data);
      })
      .catch(error => {
        console.log(error);

        alert('There was an error while fetching the items into library');
      });
  }, [auth.user.id, setLibrary]);

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

  const addToPlaylist = (
    track: SpotifyApi.TrackObjectSimplified,
    libraryItemId: LibraryItemId,
  ) => {
    addTrackToPlaylist(track, libraryItemId)
      .then(data =>
        setLibrary(
          library.map(item => {
            if (item.id === data.id) {
              return data;
            }
            return item;
          }),
        ),
      )
      .catch(error => {
        console.log(error);
        alert('There was an error while adding the item into library');
      });
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
    libraryItems: library,
    ownPlaylists,
    addOwnPlaylist,
    edit,
    addToPlaylist,
  };
};
