import styled from "styled-components";

export const SignupSelect = styled.div`
  position: relative;
  select {
    padding: 20px 0 10px 0;
    width: 100%;
    font-size: ${({ theme }) => `${theme.fontSize.xl}`};
  }
  label {
    position: absolute;
    color: ${({ theme }) => `${theme.colors.neutral06}`};
    left: 5px;
    top: 5px;
    font-size: ${({ theme }) => `${theme.fontSize.s}`};
  }
  border-radius: 12px;
`;
