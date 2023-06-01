export interface Response {
    description: string;
    id: string;
    name: string;
    image: string;
}

export interface BaseDataRaw {
    id: string;
    name: string;
    images: {
        height: number | null;
        url: string;
        width: number | null;
    }[];
}

export interface PlaylistDataRaw extends BaseDataRaw {
    description: string;
}

export interface AlbumDataRaw extends BaseDataRaw {
    release_date: string;
    artists: {
        name: string;
    }[];
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

export type Filters = 'album' | 'track' | 'artist' | 'playlist';

export type SearchParams = {
    q: string;
    type: Filters[];
    offset: number;
};

type ResponseStructure<T> = {
    items: T[];
    next: string | null;
};

type ResponsePaginated<T> = {
    items?: T[];
    hasNext: boolean;
};

export interface TrackRaw {
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
export interface SearchResponseRaw {
    albums?: ResponseStructure<AlbumDataRaw>;
    artists?: ResponseStructure<BaseDataRaw>;
    tracks?: ResponseStructure<TrackRaw>;
    playlists?: ResponseStructure<PlaylistDataRaw>;
}

export interface SearchResponse {
    albums?: ResponsePaginated<Response>;
    artists?: ResponsePaginated<Response>;
    tracks?: ResponsePaginated<Track>;
    playlists?: ResponsePaginated<Response>;
}
