import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { mockedApiInstance, spotifyApiInstance } from './index';

interface Playlist {
    description: string;
    id: string;
    name: string;
    image: string;
}

interface PlaylistData {
    description: string;
    id: string;
    images: {
        height: number | null;
        url: string;
        width: number | null;
    }[];
    name: string;
}

interface PlaylistDataRaw {
    message: string;
    playlists: Playlist[];
}

export interface PlaylistInfo {
    id: number;
    userId: number;
    name: string;
    description: string;
}

export interface Track {
    id: string;
    name: string;
    artist: string;
    album: { name: string; image: string };
    duration_ms: number;
}

interface TrackRaw {
    id: string;
    name: string;
    album: {
        name: string;
        images: {
            url: string;
        }[];
        artists: {
            name: string;
        }[];
    };
    duration_ms: number;
}

export const getFeaturedPlaylists = async () => {
    const data: {
        message: string;
        playlists: { items: PlaylistData[] };
    } = await (await spotifyApiInstance()).get('/browse/featured-playlists');

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

export const getCategoryPlaylists = async (categoryId: string) => {
    const data: {
        playlists: { items: PlaylistData[] };
    } = await (
        await spotifyApiInstance()
    ).get(`browse/categories/${categoryId}/playlists`);

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

export const createPlaylist = async (userId: number): Promise<PlaylistInfo> => {
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
