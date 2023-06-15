import { PlaceWithoutType } from "../type";

export interface Card extends Omit<PlaceWithoutType, "type" | "wished"> {
  handleModal: () => void;
  handleCurrent: (current: PlaceWithoutType) => void;
}

// export type CardElements = Omit<PlaceWithoutType, "type" | "wished">;

// export interface Card1 {
//   cardElements: CardElements;
//   handleModal: () => void;
//   handleCurrent: (current: PlaceWithoutType) => void;
// }
