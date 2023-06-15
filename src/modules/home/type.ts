import { Place } from "../shared/types/types";
export type PlaceWithoutType = Omit<Place, "type">;
