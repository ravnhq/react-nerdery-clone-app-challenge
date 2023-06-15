import { useContext } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../../context/WishlistContext";
import { Card, CardGridContainter } from "../../home";
import styled from "styled-components";

const WishlistDetaiLayout = styled.div`
  padding: 36px 24px;
`;
const WishlistDetailH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxxl}`};
  padding-bottom: 24px;
`;
export const WishlistDetail = () => {
  /*TODO: change place */
  const { id } = useParams();
  const { wishlist } = useContext(WishlistContext);
  const currentWishlist = wishlist.find((current) => current.id === id);
  const dampFunction = () => {
    return;
  };
  return (
    <WishlistDetaiLayout>
      <WishlistDetailH1>{currentWishlist?.name}</WishlistDetailH1>
      <CardGridContainter>
        {currentWishlist?.list.map((place) => (
          <Card
            handleCurrent={dampFunction}
            handleModal={dampFunction}
            key={place.id}
            ownerId={place.ownerId}
            priceDay={place.priceDay}
            rating={place.rating}
            image={place.image}
            city={place.city}
            country={place.country}
            description={place.description}
            iconUser={place.iconUser}
            id={place.id}
          ></Card>
        ))}
      </CardGridContainter>
    </WishlistDetaiLayout>
  );
};
