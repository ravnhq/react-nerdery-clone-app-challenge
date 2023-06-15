import styled from "styled-components";

export const PlaceDateLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: "fixed";
  border-top: ${({ theme }) => `1px solid ${theme.colors.neutral04}`};

  background-color: ${({ theme }) => `${theme.colors.shade01}`};
`;

export const PlaceDateButton = styled.div`
  color: white;
  background: ${({ theme }) =>
    `linear-gradient(to right,${theme.colors.gradient02})`};
  font-size: 18px;
  padding: 14px 24px;
  border-radius: 9px;
  cursor: pointer;
`;

export const PlaceDateRange = styled.div`
  text-decoration: underline;
`;

export const PlaceDateText = styled.div`
  display: flex;
  flex-direction: column;
  div:first-child {
    color: ${({ theme }) => `${theme.colors.neutral06}`};
  }
  div > span {
    font-size: ${({ theme }) => `${theme.fontSize.l}`};
    color: ${({ theme }) => `${theme.colors.shade02}`};
  }
`;
