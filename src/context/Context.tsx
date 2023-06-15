import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { UserCtxState } from "../modules/shared/types/types";
import { loginUser, registerUser, updateUserWishlists } from "../API/functions";

const user: UserCtxState = localStorage.getItem("airbnbUser")
  ? JSON.parse(localStorage.getItem("airbnbUser") as string)
  : null;

const userDefaultValue: {
  user: UserCtxState | null;
  setUser: (state: UserCtxState | null) => void;
} = {
  user: user,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: (state: UserCtxState | null) => {
    state;
  },
};

interface UserProvider {
  children: React.ReactElement;
}

export const UserContext = createContext(userDefaultValue);

export const UserProvider: FC<UserProvider> = ({ children }) => {
  const [user, setUser] = useState<UserCtxState | null>(userDefaultValue.user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): {
  addWishlist: (id: string) => void;
  register: (signUp: {
    email: string;
    password: string;
    wishlists: string[];
  }) => void;
  login: (signUp: {
    email: string;
    password: string;
    wishlists: string[];
  }) => void;
} => {
  const { user, setUser } = useContext(UserContext);

  const login = async (signUp: {
    email: string;
    password: string;
    wishlists: string[];
  }) => {
    const response = await loginUser(signUp);
    const data = response.data;
    localStorage.setItem("airbnbToken", data.accessToken);
    localStorage.setItem("airbnbUser", JSON.stringify(data.user));
    setUser(data.user);
  };
  const register = async (signUp: {
    email: string;
    password: string;
    wishlists: string[];
  }) => {
    const response = await registerUser(signUp);
    const data = response.data;
    localStorage.setItem("airbnbToken", data.accessToken);
    localStorage.setItem("airbnbUser", JSON.stringify(data.user));
    setUser(data.user);
  };

  const addWishlist = async (id: string) => {
    if (user) {
      try {
        const response = await updateUserWishlists(id, user.id, user.wishlists);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.log("error");
      }
    }
  };
  useEffect(() => {
    if (user) {
      localStorage.setItem("airbnbUser", JSON.stringify(user));
    }
  }, [user]);

  return { addWishlist, login, register };
};
