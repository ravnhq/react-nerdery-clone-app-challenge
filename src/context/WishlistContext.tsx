import { createContext, useState, useEffect, FC, useContext } from "react";
import { PlaceWithoutType } from "../modules/home/type";
import { Wishlist } from "../modules/shared/types/types";
import { UserContext, useUserContext } from "./UserContext";
import {
  createWishlistElement,
  fetchWishlists,
  deleteWishlistElement as deleteitem,
  createWishlist,
} from "../API/functions";

export type WishlistItem = Omit<Wishlist, "userId">;

export type WishlistCtx = WishlistItem[];

const initialWishlistState: WishlistCtx = [];

const wishlistDefaultValue = {
  wishlist: initialWishlistState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setWishlist: (state: WishlistCtx) => {
    state;
  },
};
export const WishlistContext = createContext(wishlistDefaultValue);

interface WishlistProvider {
  children: React.ReactElement;
}

export const WishlistProvider: FC<WishlistProvider> = ({ children }) => {
  const [wishlist, setWishlist] = useState(wishlistDefaultValue.wishlist);
  const { user } = useContext(UserContext);
  /*TODO: maybe there is a bug to get this function here, dont reload fast */
  const getWishlists = async () => {
    if (user) {
      const response = await fetchWishlists(user.id);
      setWishlist(response.data);
    }
  };

  useEffect(() => {
    getWishlists();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = (): {
  allElements: string[];
  addWishlistElement: (current: PlaceWithoutType) => void;
  deleteWishlistElement: (current: PlaceWithoutType) => void;
  addWishlist: (
    id: string,
    newWishlist: Wishlist,
    userId: string,
    newPlace: PlaceWithoutType
  ) => void;
} => {
  const [allElements, setAllElements] = useState<string[]>([]);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { user } = useContext(UserContext);
  const { addWishlist: addUserWishlist } = useUserContext();

  const addWishlist = async (
    id: string,
    newWishlist: Wishlist,
    userId: string,
    newPlace: PlaceWithoutType
  ) => {
    const response = await createWishlist({
      ...newWishlist,
      id,
      userId,
      list: [...newWishlist.list, newPlace],
    });
    const data = response.data;
    addUserWishlist(data.id);
    setWishlist([...wishlist, { id, list: data.list, name: data.name }]);
  };

  const addWishlistElement = async (current: PlaceWithoutType) => {
    if (user) {
      try {
        const response = await createWishlistElement(
          user.wishlists[0],
          wishlist[0].list,
          current
        );
        const data = response.data;
        const newWishlist = [...wishlist];
        newWishlist[0].list = data.list;
        setWishlist(newWishlist);
      } catch (error) {
        console.log("error in card");
      }
    }
  };
  const deleteWishlistElement = async (current: PlaceWithoutType) => {
    if (user) {
      try {
        const response = await deleteitem(
          user.wishlists[0],
          current.id,
          wishlist[0].list
        );
        const data = response.data;
        const newWishlist = [...wishlist];
        newWishlist[0].list = data.list;
        setWishlist(newWishlist);
      } catch (error) {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    wishlist.forEach((wishlist) => {
      wishlist.list.forEach((place) => {
        if (!allElements.includes(place.id)) {
          setAllElements([...allElements, place.id]);
        }
      });
    });
  }, [wishlist]);

  return {
    allElements,
    addWishlistElement,
    deleteWishlistElement,
    addWishlist,
  };
};
