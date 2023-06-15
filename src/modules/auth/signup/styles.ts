import styled from "styled-components";

export const SignupVerificationSpan = styled.span`
  text-align: initial;
  font-size: ${({ theme }) => `${theme.fontSize.base}`};
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FormError = styled.div`
  color: ${({ theme }) => `${theme.colors.error02}`};
  text-align: initial;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    fill: ${({ theme }) => `${theme.colors.error02}`};
  }
  margin: 10px 0;
`;
