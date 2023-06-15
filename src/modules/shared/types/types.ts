import { PlaceWithoutType } from "../../home/type";

type tags = "cabins" | "department" | "caves" | "mini" | "dome" | "farm";

export interface Place {
  id: string;
  ownerId: string;
  type: tags;
  image: string;
  iconUser: string;
  city: string;
  country: string;
  description: string;
  priceDay: number;
  wished: boolean;
  rating: number;
}

export interface Wishlist {
  id: string;
  userId: string;
  name: string;
  list: PlaceWithoutType[];
}

type userType = "user" | "host";

export interface User {
  id: string;
  email: string;
  password: string;
  wishlists: string[];
  //not really needed
  name?: string;
  picture?: string;
  reviews?: number;
  country?: string;
  type?: userType;
  birthday?: Date;
  career?: string;
  study?: string;
  hobby?: string;
  resume?: string;
}

export type UserCtxState = Omit<User, "password">;
