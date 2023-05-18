import { ImageSource } from './image-data';

export interface Genre {
  id: number;
  href: string;
  images: ImageSource[];
  name: string;
  type: 'link';
}
