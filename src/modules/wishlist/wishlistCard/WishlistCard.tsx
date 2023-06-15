import { FC } from "react";
import styled from "styled-components";
import { Heart } from "../../../assets";

interface WishlistCard {
  name: string;
  itemsCount: number;
}

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation01}`};
  margin-bottom: 10px;
  display: grid;
  place-items: center;
`;

const IconContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.neutral06}`};
  width: 95%;
  height: 95%;
  display: grid;
  place-items: center;
  border-radius: 12px;
`;

const WishlistIcon = styled(Heart)`
  background-color: ${({ theme }) => `${theme.colors.neutral06}`};
  width: 30%;
  height: 30%;
`;
const WishlistCardTitle = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.xl}`};
`;

const WishlistCardCount = styled.div`
  color: ${({ theme }) => `${theme.colors.neutral06}`};
`;

const WishlistCard: FC<WishlistCard> = ({ name, itemsCount }) => {
  return (
    <div>
      <ImagePlaceholder>
        <IconContainer>
          <WishlistIcon />
        </IconContainer>
      </ImagePlaceholder>
      <WishlistCardTitle>{name}</WishlistCardTitle>
      <WishlistCardCount>{itemsCount} saved</WishlistCardCount>
    </div>
  );
};

export default WishlistCard;
