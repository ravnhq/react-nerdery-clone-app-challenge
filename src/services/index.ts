import axios from 'axios';

export enum EApiRoutes {
    MockApi,
    SpotifyApi,
}

let accessToken: string | null = null;

const createInstance = (api: EApiRoutes, options = {}) => {
    const instance = axios.create({
        baseURL:
            api === EApiRoutes.MockApi
                ? import.meta.env.VITE_MOCKED_API
                : import.meta.env.VITE_SPOTIFY_BASE_URL,
        ...options,
    });

    instance.interceptors.response.use((res) => res.data);

    return instance;
};
const getSpotifyToken = async () => {
    try {
        const data = await axios.post(
            'https://accounts.spotify.com/api/token',
            {
                grant_type: 'client_credentials',
                client_id: import.meta.env.VITE_CLIENT_ID,
                client_secret: import.meta.env.VITE_CLIENT_SECRET,
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );

        return data.data.access_token;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const mockedApiInstance = createInstance(EApiRoutes.MockApi);

export const spotifyApiInstance = async () => {
    if (!accessToken) {
        accessToken = await getSpotifyToken();
    }

    return createInstance(EApiRoutes.SpotifyApi, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
