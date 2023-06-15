import styled from "styled-components";
import { LeftArrow } from "../../../assets";

export const PlaceHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const PlaceHeaderText = styled.div`
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
`;
export const BackIcon = styled(LeftArrow)`
  cursor: pointer;
`;
