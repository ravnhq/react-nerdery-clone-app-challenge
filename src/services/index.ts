import axios from 'axios';

export enum EApiRoutes {
    MockApi,
    SpotifyApi,
}

const createInstance = (api: EApiRoutes) => {
    const instance = axios.create({
        baseURL:
            api === EApiRoutes.MockApi
                ? import.meta.env.VITE_MOCKED_API
                : import.meta.env.VITE_SPOTIFY_BASE_URL,
    });

    instance.interceptors.response.use((res) => ({
        ...res.data,
        status: res.status,
    }));

    return instance;
};

export const mockedApiInstance = createInstance(EApiRoutes.MockApi);
