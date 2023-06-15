import { PlaceWithoutType } from "../type";

export interface Modal {
  modal: boolean;
  handleModal: () => void;
  currentPlace: PlaceWithoutType | null;
}

export interface WishlistResponse {
  id: string;
  userId: string;
  name: string;
  list: PlaceWithoutType[];
}
