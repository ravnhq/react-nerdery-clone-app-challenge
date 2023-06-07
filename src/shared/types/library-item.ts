import { AllColectableSpotifyObjects } from './spotify-objects';

export type LibraryItemId = number | string;

export interface LibraryItem {
  id: LibraryItemId;
  userId: number;
  entity: AllColectableSpotifyObjects;
}

export interface LibraryItemPayload extends Omit<LibraryItem, 'id'> {
  id?: LibraryItemId;
}
