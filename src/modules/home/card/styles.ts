import { Heart } from "../../../assets";
import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

export const CardImage = styled.img<{ src: string }>`
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px;
  content: url(${({ src }) => `${src}`});
`;
export const CardHeart = styled(Heart)<{ wished: boolean }>`
  position: absolute;
  top: 18px;
  right: 18px;
  fill: ${({ wished }) => `${wished ? "red" : ""}`};
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CardRating = styled.div`
  display: flex;
  align-items: center;
`;

export const CardSpanDefault = styled.span<{ display?: string }>`
  display: ${({ display }) => (display ? `${display}` : "")};
  color: ${(props) => `${props.theme.colors.shade02}`};
  font-size: ${(props) => `${props.theme.fontSize.m}`};
  font-weight: ${(props) => `${props.theme.weight.bold}`};
`;
export const CardSpanSecondary = styled.span<{ display?: string }>`
  display: ${({ display }) => (display ? `${display}` : "")};
  color: ${(props) => `${props.theme.colors.neutral08}`};
  font-size: ${(props) => `${props.theme.fontSize.m}`};
`;
