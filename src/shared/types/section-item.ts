import { ImageSource } from './image-data';
import { AllSpotifyObjects } from './spotify-objects';

export interface SectionItem {
  name: string;
  description: string;
  owner?: string;
  image: ImageSource;
  id: string;
  type?: string;
  entity?: AllSpotifyObjects;
}
