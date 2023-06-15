import { useContext } from "react";
import { Heart, Search, Avatar, Airbnb } from "../../../assets";
import { BottomNavbarItem, BottomNavbarLayout } from "./styles.ts";
import { UserContext } from "../../../context/UserContext.tsx";
import { WishlistContext } from "../../../context/WishlistContext.tsx";
import styled from "styled-components";

const HeartIcon = styled(Heart)`
  fill: ${({ theme }) => `${theme.colors.neutral06}`};
`;

export const BottomNavbar = () => {
  const { user, setUser } = useContext(UserContext);

  const { setWishlist } = useContext(WishlistContext);
  const logout = () => {
    localStorage.removeItem("airbnbToken");
    localStorage.removeItem("airbnbUser");
    setUser(null);
    setWishlist([]);
    location.reload();
  };
  return (
    <BottomNavbarLayout>
      <BottomNavbarItem to={"/"}>
        <Search /> Explore
      </BottomNavbarItem>
      <BottomNavbarItem to={"/wishlist"}>
        <HeartIcon /> Wishlist
      </BottomNavbarItem>
      {user === null ? (
        <>
          <BottomNavbarItem to={"/login"}>
            <Avatar /> Login
          </BottomNavbarItem>
        </>
      ) : (
        <>
          <BottomNavbarItem to={"/"}>
            <Airbnb /> Trips
          </BottomNavbarItem>
          <BottomNavbarItem onClick={logout} to={"/"}>
            <Avatar /> Logout
          </BottomNavbarItem>
        </>
      )}
    </BottomNavbarLayout>
  );
};
