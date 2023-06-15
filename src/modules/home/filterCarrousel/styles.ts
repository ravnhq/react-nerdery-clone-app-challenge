import styled from "styled-components";

export const FilterItem = styled.button`
  &.active {
    font-size: 40px;
  }
  cursor: pointer;
  display: flex;
  background-color: inherit;
  border: none;
  flex-direction: column;
  align-items: center;
  padding: 4px 0px;
  transition: 0.4s;
  color: ${({ theme }) => `${theme.colors.neutral04}`};
  .carrouselItem {
    width: 24px;
    path {
      transition: 0.4s;
      fill: ${({ theme }) => `${theme.colors.neutral04}`};
    }
  }
  &:hover {
    box-shadow: ${({ theme }) => `0 1px 0 ${theme.colors.neutral04}`};
    color: ${({ theme }) => `${theme.colors.shade02}`};
    .carrouselItem {
      path {
        fill: ${({ theme }) => `${theme.colors.shade02}`};
      }
    }
  }
`;

export const Carrousel = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  scroll-snap-type: none;
  gap: 30px;
  padding: 1px 24px;
  font-size: 12px;
`;
