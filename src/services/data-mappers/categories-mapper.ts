import { Categorie } from '../../shared/types/categorie';
import { getFirstImageOrDefault } from './utils';

export const categoriesMapper = (
  categoriesResponse: SpotifyApi.MultipleCategoriesResponse,
) => {
  return categoriesResponse.categories.items.map<Categorie>(
    ({ id, name, icons, href }) => ({
      id,
      href,
      name,
      type: 'link',
      image: getFirstImageOrDefault(icons),
    }),
  );
};
