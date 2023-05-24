import { mockedApiInstance } from './index';

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

export const getPlaylists = async (): Promise<PlaylistDataRaw> => {
    const data: {
        message: string;
        playlists: { items: PlaylistData[] };
    } = await mockedApiInstance.get('/playlist');

    return {
        message: data.message,
        playlists: data.playlists.items.map((playlist: PlaylistData) => ({
            description: playlist.description,
            id: playlist.id,
            image: playlist.images[0].url,
            name: playlist.name,
        })),
    };
};
