import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { mockedApiInstance, spotifyApiInstance } from './index';
import {
    PlaylistDataRaw,
    PlaylistInfo,
    Track,
    TrackRaw,
    SearchParams,
    SearchResponseRaw,
} from '../shared/types/spotify';

export const getFeaturedPlaylists = async () => {
    const data: {
        message: string;
        playlists: { items: PlaylistDataRaw[] };
    } = await (
        await spotifyApiInstance()
    ).get('/browse/featured-playlists', {
        params: {
            limit: 7,
        },
    });

    return {
        message: data.message,
        playlists: data.playlists.items.map((playlist) => {
            const [image] = playlist.images;

            return {
                description: playlist.description,
                id: playlist.id,
                image: image.url,
                name: playlist.name,
            };
        }),
    };
};

export const getCategoryPlaylists = async (categoryId: string) => {
    const data: {
        playlists: { items: PlaylistDataRaw[] };
    } = await (
        await spotifyApiInstance()
    ).get(`browse/categories/${categoryId}/playlists`, {
        params: {
            limit: 7,
        },
    });

    return {
        playlists: data.playlists.items.map((playlist) => {
            const [image] = playlist.images;

            return {
                description: playlist.description,
                id: playlist.id,
                image: image.url,
                name: playlist.name,
            };
        }),
    };
};

export const createPlaylist = async (
    userId: number,
): Promise<{
    id: number;
    name: string;
    description: string;
    userId: number;
}> => {
    return mockedApiInstance.post('/playlists', {
        userId,
        name: 'New Playlist',
        description: '',
    });
};

export const getUserPlaylists = async (userId: number) => {
    const data: PlaylistInfo[] = await mockedApiInstance.get('/playlists', {
        params: {
            userId,
        },
    });

    return data;
};

export const getUserPlaylistById = async (id: number) => {
    const data: PlaylistInfo[] = await mockedApiInstance.get('/playlists', {
        params: {
            id,
        },
    });

    const [playlist] = data;

    return playlist;
};

export const addTrackToPlaylist = async (playlistId: number, track: Track) => {
    return mockedApiInstance.post('/tracks', {
        playlistId,
        ...track,
    });
};

export const getPlaylistTracks = async (playlistId: number) => {
    const data: Track[] = await mockedApiInstance.get('/tracks', {
        params: {
            playlistId,
        },
    });

    if (data.length === 0) {
        throw new Error('No tracks found');
    }

    return data;
};

export const removeTrackFromPlaylist = async (id: string) => {
    return mockedApiInstance.delete(`/tracks/${id}`);
};

export const searchTracks = async (query: string) => {
    const data: {
        tracks: {
            items: TrackRaw[];
        };
    } = await (
        await spotifyApiInstance()
    ).get('/search', {
        params: {
            q: query,
            type: 'track',
        },
    });

    return data.tracks.items.map((track) => {
        const [image] = track.album.images;
        const [artist] = track.album.artists;

        return {
            id: track.id,
            name: track.name,
            artist: artist.name,
            album: {
                name: track.album.name,
                image: image.url,
            },
            duration_ms: track.duration_ms,
        };
    });
};

export const searchTracksPaginated = async (
    query: string,
    params: { offset: number },
    config: AxiosRequestConfig,
) => {
    const data: {
        tracks: {
            items: TrackRaw[];
        };
    } = await (
        await spotifyApiInstance()
    ).get('/search', {
        params: {
            q: query,
            type: 'track',
            ...params,
        },
        ...config,
    });

    return data.tracks.items.map((track) => {
        const [image] = track.album.images;
        const [artist] = track.album.artists;

        return {
            id: track.id,
            name: track.name,
            artist: artist.name,
            album: {
                name: track.album.name,
                image: image.url,
            },
            duration_ms: track.duration_ms,
        };
    });
};

export const deletePlaylistById = async (id: number) => {
    return mockedApiInstance.delete(`/playlists/${id}`);
};

export const editPlaylistInfo = async (form: PlaylistInfo) => {
    return mockedApiInstance.put(`/playlists/${form.id}`, {
        ...form,
    });
};

export const searchItems = async (config: AxiosRequestConfig<SearchParams>) => {
    const { params } = config;

    const data: SearchResponseRaw = await (
        await spotifyApiInstance()
    ).get('/search', {
        ...config,
        params: {
            q: params?.q,
            type: params?.type.join(','),
            offset: params?.offset,
        },
    });

    const trackItems = data.tracks?.items.map((track) => {
        const [image] = track.album.images;
        const [artist] = track.album.artists;

        return {
            id: track.id,
            name: track.name,
            artist: artist.name,
            album: {
                name: track.album.name,
                image: image.url,
            },
            duration_ms: track.duration_ms,
        };
    });

    const albumItems = data.albums?.items.map((album) => {
        const [image] = album.images;
        const [artist] = album.artists;
        const { release_date } = album;

        const releaseYear = release_date.substring(
            0,
            release_date.indexOf('-'),
        );

        return {
            id: album.id,
            name: album.name,
            description: `${releaseYear} - ${artist.name}`,
            image: image.url,
        };
    });

    const artistItems = data.artists?.items.map((artist) => {
        const [image] = artist.images;

        return {
            id: artist.id,
            name: artist.name,
            image: image.url,
            description: 'Artist',
        };
    });

    const playlistItems = data.playlists?.items.map((playlist) => {
        const [image] = playlist.images;

        return {
            description: playlist.description,
            id: playlist.id,
            image: image.url,
            name: playlist.name,
        };
    });

    return {
        tracks: data.tracks && {
            items: trackItems,
            hasNext: Boolean(data.tracks.next),
        },
        albums: data.albums && {
            items: albumItems,
            hasNext: Boolean(data.albums.next),
        },
        artists: data.artists && {
            items: artistItems,
            hasNext: Boolean(data.artists.next),
        },
        playlists: data.playlists && {
            items: playlistItems,
            hasNext: Boolean(data.playlists.next),
        },
    };
};
