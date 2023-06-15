import styled from "styled-components";
import { Link } from "react-router-dom";

export const BottomNavbarItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => `${theme.colors.neutral04}`};
`;
export const BottomNavbarLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 10px 0px;
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
`;
