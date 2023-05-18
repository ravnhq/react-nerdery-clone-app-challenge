import { Genre } from '../../shared/types/genre';
import { Section } from '../../shared/types/section';
import axios from 'axios';

export async function getSections() {
  const { data } = await axios.get<Section[]>(
    `${import.meta.env.VITE_APIBASE_URL}/sections`,
  );
  return data;
}

export async function getGenres() {
  const { data } = await axios.get<Genre[]>(
    `${import.meta.env.VITE_APIBASE_URL}/genres`,
  );
  return data;
}
