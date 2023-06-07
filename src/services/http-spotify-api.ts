import { Section } from '../shared/types/section';
import axios from 'axios';
import { searchMapper } from './data-mappers/search-mapper';
import { categoriesMapper } from './data-mappers/categories-mapper';
import {
  LibraryItem,
  LibraryItemId,
  LibraryItemPayload,
} from '../shared/types/library-item';
import { LoginInputs } from '../shared/types/auth-inputs';
import { UserWithToken } from '../shared/types/user';
import { SignupInputs } from '../shared/types/signup-inputs';

export const API_BASE_URL = import.meta.env.VITE_APIBASE_URL;

const API_LOGIN_URL = `${API_BASE_URL}/login`;
const API_REGISTER_URL = `${API_BASE_URL}/register`;

export async function getSections() {
  const { data } = await axios.get<Section[]>(`${API_BASE_URL}/sections`);
  return data;
}

export async function getCategories() {
  const { data } = await axios.get<SpotifyApi.MultipleCategoriesResponse>(
    `${API_BASE_URL}/categories`,
  );
  return categoriesMapper(data);
}

export async function searchAll(searchText: string) {
  const { data } = await axios.get<SpotifyApi.SearchResponse>(
    `${API_BASE_URL}/search/${searchText}`,
  );
  return searchMapper(data);
}

export async function addToLibrary(object: LibraryItemPayload) {
  const { data } = await axios.post<LibraryItem>(
    `${API_BASE_URL}/library-items`,
    object,
  );
  return data;
}

export async function createPlaylist(userId: number) {
  const { data } = await axios.post<LibraryItem>(`${API_BASE_URL}/playlist`, {
    userId,
  });
  return data;
}

export async function getLibraryItems(userId: number) {
  const { data } = await axios.get<LibraryItem[]>(
    `${API_BASE_URL}/users/${userId}/library-items`,
  );
  return data.reverse();
}

export async function editLibraryItem(libraryItem: LibraryItem) {
  const { id, ...payload } = libraryItem;
  const { data } = await axios.patch<LibraryItem>(
    `${API_BASE_URL}/library-items/${id}`,
    payload,
  );
  return data;
}

export async function removeFromLibrary(libraryItemId: LibraryItemId) {
  const { data } = await axios.delete<LibraryItem>(
    `${API_BASE_URL}/library-items/${libraryItemId}`,
  );
  return data;
}

export async function addTrackToPlaylist(
  track: SpotifyApi.TrackObjectSimplified,
  playlistId: LibraryItemId,
) {
  const { data } = await axios.post<LibraryItem>(
    `${API_BASE_URL}/add-to-playlist/${playlistId}`,
    track,
  );
  return data;
}

export async function login(payload: LoginInputs) {
  const { data } = await axios.post<UserWithToken>(`${API_LOGIN_URL}`, payload);
  return data;
}

export async function register(payload: SignupInputs) {
  const { data } = await axios.post<UserWithToken>(
    `${API_REGISTER_URL}`,
    payload,
  );
  return data;
}
