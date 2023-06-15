import styled from "styled-components";

const WishlistH2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => `${theme.weight.base}`};
`;
const WishlistEmpty = styled.p`
  color: ${({ theme }) => `${theme.colors.neutral06}`};
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  span {
    display: block;
  }
`;

export const Empty = () => {
  return (
    <>
      <WishlistH2>Create your wishlist</WishlistH2>
      <WishlistEmpty>
        As you search, tap the heart icon to save your favorite places and
        <span> Experiences to a wishlist</span>
      </WishlistEmpty>
    </>
  );
};
