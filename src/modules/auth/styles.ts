import styled from "styled-components";

export const SignupSeparation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  margin-top: 12px;
  hr {
    width: 100%;
    height: 1px;
  }
`;

export const SignupFormLayout = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px;
`;

export const SignupH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  padding-bottom: 12px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral06}`};
`;

export const SignupH2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  text-align: left;
  margin-bottom: 20px;
`;
export const SignupLink = styled.a`
  color: ${({ theme }) => `${theme.colors.shade02}`};
  margin-top: 20px;
`;

export interface Button {
  action?: string;
}
export const SignupButton = styled.button<Button>`
  border-radius: 12px;
  padding: 10px 0;
  color: ${({ theme, action }) =>
    action === "secondary"
      ? `${theme.colors.shade02}`
      : `${theme.colors.shade01}`};
  background: ${({ theme, action }) =>
    action === "secondary"
      ? `${theme.colors.shade01}`
      : `linear-gradient(to right, ${theme.colors.gradient03})`};
`;

export const SignupInput = styled.div`
  position: relative;
  border-radius: 12px;
  input {
    padding: 20px 5px;
    width: 100%;
    font-size: ${({ theme }) => `${theme.fontSize.xl}`};
  }
  label {
    position: absolute;
    top: 22px;
    left: 7px;
    font-size: ${({ theme }) => `${theme.fontSize.xl}`};
    transition: 0.04s;
  }
  &:focus-within {
    label {
      font-size: ${({ theme }) => `${theme.fontSize.s}`};
      top: 5px;
    }
  }
  &:focus {
    outline: ${({ theme }) => `${theme.colors.shade01}`};
  }
`;
