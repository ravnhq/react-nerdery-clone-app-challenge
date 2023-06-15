import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../context/UserContext";
import { WishlistContext } from "../../../context/WishlistContext";

const UserModalLayout = styled.div`
  padding: 8px 0;
  border-radius: 20px;
  position: absolute;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation02}`};
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  min-width: 200px;
  right: 0;
  top: 50px;
  text-align: left;
`;
const UserModalItem = styled(Link)<{ primary?: boolean }>`
  border-radius: 10px;
  padding: 8px 8px;
  display: block;
  text-decoration: none;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  color: ${({ theme, primary }) =>
    `${primary ? `${theme.colors.shade02}` : `${theme.colors.neutral08}`} `};

  :hover {
    background-color: ${({ theme }) => `${theme.colors.neutral01}`};
  }
`;
const UserModalButton = styled.button<{ primary?: boolean }>`
  border-radius: 10px;
  padding: 8px 8px;
  width: 100%;
  border: none;
  text-align: left;
  display: block;
  text-decoration: none;
  background-color: inherit;
  cursor: pointer;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  color: ${({ theme, primary }) =>
    `${primary ? `${theme.colors.shade02}` : `${theme.colors.neutral08}`} `};

  :hover {
    background-color: ${({ theme }) => `${theme.colors.neutral01}`};
  }
`;

const UserModalAction = styled.div`
  box-shadow: ${({ theme }) => `0 1px 2px -2px ${theme.colors.neutral08}`};
  padding: 0 0 10px 0;
  margin: 10px 0;
`;
interface UserModal {
  modal: boolean;
  handleModal: () => void;
}
export const UserModal: FC<UserModal> = () => {
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
    <UserModalLayout>
      <UserModalAction>
        {user ? (
          <>
            <UserModalButton primary={true} onClick={logout}>
              Log out
            </UserModalButton>
            <UserModalItem to={"/wishlist"}>Wishlists </UserModalItem>
          </>
        ) : (
          <>
            <UserModalItem to={"/login"} primary={true}>
              Log in
            </UserModalItem>
            <UserModalItem to={"/login"}>Sign up</UserModalItem>
          </>
        )}
      </UserModalAction>
      <div>
        <UserModalItem to={"#"}>Airbnb your home</UserModalItem>
        <UserModalItem to={"#"}>Help</UserModalItem>
      </div>
    </UserModalLayout>
  );
};
