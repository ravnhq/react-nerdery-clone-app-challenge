import { AxiosResponse } from 'axios';
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

interface PLaylistInfo {
    id: number;
    userId: number;
    name: string;
    description: string;
}

export const getFeaturedPlaylists = async (): Promise<PlaylistDataRaw> => {
    const data: {
        message: string;
        playlists: { items: PlaylistData[] };
    } = await (await spotifyApiInstance()).get('/browse/featured-playlists');

    return {
        message: data.message,
        playlists: data.playlists.items.map((playlist) => ({
            description: playlist.description,
            id: playlist.id,
            image: playlist.images[0].url,
            name: playlist.name,
        })),
    };
};

export const getCategoryPlaylists = async (categoryId: string) => {
    const data: {
        playlists: { items: PlaylistData[] };
    } = await (
        await spotifyApiInstance()
    ).get(`browse/categories/${categoryId}/playlists`);

    return {
        playlists: data.playlists.items.map((playlist) => ({
            description: playlist.description,
            id: playlist.id,
            image: playlist.images[0].url,
            name: playlist.name,
        })),
    };
};

export const createPlaylist = async (userId: number): Promise<PLaylistInfo> => {
    return mockedApiInstance.post('/playlists', {
        userId,
        name: 'New Playlist',
        description: '',
    });
};

export const getUserPlaylists = async (userId: number) => {
    const data: PLaylistInfo[] = await mockedApiInstance.get('/playlists', {
        params: {
            userId,
        },
    });

    return data;
};

export const getUserPlaylistById = async (id: number) => {
    const data: PLaylistInfo = await mockedApiInstance.get('/playlists', {
        params: {
            id,
        },
    });

    return data;
};
