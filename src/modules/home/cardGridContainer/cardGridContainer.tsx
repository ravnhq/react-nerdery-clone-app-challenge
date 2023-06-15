import styled from "styled-components";

export const CardGridContainter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  column-gap: 30px;
  justify-items: center;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1640px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
