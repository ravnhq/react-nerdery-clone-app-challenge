import { FC, useContext, useEffect, useState } from "react";
import { Star } from "../../../assets";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardContent,
  CardHeart,
  CardImage,
  CardInfo,
  CardRating,
  CardSpanDefault,
  CardSpanSecondary,
} from "./styles";
import { Card as cardProps } from "./type";
import { UserContext } from "../../../context/UserContext";
import { useWishlistContext } from "../../../context/WishlistContext";

export const Card: FC<cardProps> = ({
  handleModal,
  ownerId,
  id,
  iconUser,
  image,
  city,
  country,
  rating,
  description,
  priceDay,
  handleCurrent,
}) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { addWishlistElement, deleteWishlistElement, allElements } =
    useWishlistContext();
  const [wished, setWished] = useState(false);

  useEffect(() => {
    setWished(allElements.includes(id));
  }, [allElements]);

  const navigateTo = () => {
    navigate(`/place/${id}`);
  };
  const handleWishList = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!user) {
      navigate(`/login`);
      return;
    }
    handleCurrent({
      city,
      country,
      description,
      image,
      iconUser,
      ownerId,
      id,
      priceDay,
      rating,
      wished,
    });
    if (wished) {
      setWished(!wished);
      deleteWishlistElement({
        city,
        country,
        description,
        image,
        iconUser,
        ownerId,
        id,
        priceDay,
        rating,
        wished,
      });
    } else {
      setWished(!wished);
      if (user) {
        if (user.wishlists.length === 0) {
          handleModal();
        } else {
          addWishlistElement({
            city,
            country,
            description,
            image,
            iconUser,
            ownerId,
            id,
            priceDay,
            rating,
            wished,
          });
        }
      }
    }
  };

  return (
    <CardContainer onClick={navigateTo}>
      <div className="image">
        <CardImage src={image} data-testid="image" />
        <CardHeart
          wished={wished}
          onClick={handleWishList}
          data-testid="heart"
        />
      </div>
      <CardContent>
        <CardInfo>
          <div className="info" data-testid="info">
            <CardSpanDefault display="block">
              {city},{country}
            </CardSpanDefault>
            <CardSpanSecondary display="block">{description}</CardSpanSecondary>
            <CardSpanSecondary display="block">Oct 23 - 28</CardSpanSecondary>
          </div>
          <div className="price" data-testid="price">
            <CardSpanDefault>${priceDay} </CardSpanDefault>
            night
          </div>
        </CardInfo>
        <div className="rating" data-testid="rating">
          <CardRating>
            <Star />
            <span>{rating}</span>
          </CardRating>
        </div>
      </CardContent>
    </CardContainer>
  );
};
