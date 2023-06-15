import { useContext } from "react";
import styled from "styled-components";
import { Empty } from ".";
import { WishlistContext } from "../../context/WishlistContext";
import { Wishlists } from "./wishlists/Wishlists";
import { UserContext } from "../../context/UserContext";

const WishlistLayout = styled.div`
  padding: 36px 24px;
`;

const WishlistH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.larger}`};
  margin-bottom: 32px;
  font-weight: ${({ theme }) => `${theme.weight.base}`};
`;

const WishlistH2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.base}`};
`;

const WishlistLogin = styled.button`
  padding: 14px 24px;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  border-radius: 10px;
  color: ${({ theme }) => `${theme.colors.shade01}`};
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.gradient01})`};
  border: none;
`;
const WishlistParagraph = styled.p`
  color: ${({ theme }) => `${theme.colors.neutral06}`};
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { user } = useContext(UserContext);
  return (
    <WishlistLayout>
      <WishlistH1>Wishlists</WishlistH1>
      {user !== null ? (
        <>{wishlist.length ? <Wishlists /> : <Empty />}</>
      ) : (
        <>
          <WishlistH2>Log in to view your wishlists</WishlistH2>
          <WishlistParagraph>
            You can create, view, or edit wishlists once you've logged in
          </WishlistParagraph>
          <WishlistLogin>Log in</WishlistLogin>
        </>
      )}
    </WishlistLayout>
  );
};
