import styled from "styled-components";

export const SearchI = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  position: relative;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation01}`};
  div {
    display: flex;
    flex-direction: column;
  }
  .filterSearch {
    position: absolute;
    right: 10px;
    border: ${({ theme }) => `1px solid ${theme.colors.shade02}`};
    padding: 10px;
    border-radius: 100%;
  }
  @media (min-width: 740px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  padding: 15px 20px;
`;
