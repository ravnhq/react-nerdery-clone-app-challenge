import axios from "axios";
import {
  ENDPOINT,
  LOGIN,
  REGISTER,
  USERS,
  WISHLIST,
} from "../modules/shared/API";
import { register } from "../modules/auth/type";
import { WishlistCtx } from "../context/WishlistContext";
import { UserCtxState, Wishlist } from "../modules/shared/types/types";
import { WishlistResponse } from "../modules/home/wishListModal/type";
import { PlaceWithoutType } from "../modules/home/type";

export const fetchWishlists = async (id: string) => {
  return axios.get<WishlistCtx>(`${ENDPOINT}${WISHLIST}?userId=${id}`);
};

export const updateUserWishlists = async (
  id: string,
  userId: string,
  wishlists: string[]
) => {
  return axios.patch<UserCtxState>(`${ENDPOINT}${USERS}/${userId}`, {
    wishlists: [...wishlists, id],
  });
};

export const createWishlist = async (wishlist: Wishlist) => {
  return axios.post<WishlistResponse>(`${ENDPOINT}${WISHLIST}/`, wishlist);
};

export const createWishlistElement = async (
  id: string,
  wishlist: PlaceWithoutType[],
  current: PlaceWithoutType
) => {
  return axios.patch<Wishlist>(`${ENDPOINT}${WISHLIST}/${id}`, {
    list: [...wishlist, current],
  });
};

export const deleteWishlistElement = async (
  id: string,
  deleteId: string,
  wishlist: PlaceWithoutType[]
) => {
  return axios.patch<Wishlist>(`${ENDPOINT}${WISHLIST}/${id}`, {
    list: wishlist.filter((place) => place.id !== deleteId),
  });
};

export const loginUser = async (signUp: {
  email: string;
  password: string;
}) => {
  return axios.post<register>(`${ENDPOINT}${LOGIN}`, signUp);
};

export const registerUser = async (newUser: {
  email: string;
  password: string;
  wishlists: string[];
}) => {
  return axios.post<register>(`${ENDPOINT}${REGISTER}`, {
    ...newUser,
  });
};

export const emailExists = async (email: string) => {
  return axios.get<[]>(`${ENDPOINT}${USERS}?email=${email}`);
};
