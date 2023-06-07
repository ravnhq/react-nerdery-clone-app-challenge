import { ImageSource } from './image-data';

export interface Categorie {
  id: number | string;
  href: string;
  image: ImageSource;
  name: string;
  type: 'link';
}
