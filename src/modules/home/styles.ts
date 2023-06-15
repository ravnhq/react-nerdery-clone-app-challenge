import styled from "styled-components";

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;
export const FixedBottomNav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (min-width: 740px) {
    display: none;
  }
`;
