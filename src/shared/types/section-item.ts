import { ImageData, ImageSource } from './image-data';

export interface SectionItem {
  name: string;
  description: string;
  owner: string;
  image: ImageSource;
  uri: string;
}
