import styled from 'styled-components';
import { Heading1 } from '../../../shared/ui/heading1';
import { FormGroup } from '../styles';
import { ThemeButton } from '../../../shared/ui/button';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--background-color);
`;

export const LoginHeader = styled.header`
  padding: 32px 0px 32px 51px;
  margin-bottom: 0px;
`;

export const LoginMain = styled.main`
  flex: 3 1 0%;
  display: flex;
  justify-content: center;
  padding: 32px;
  background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);

  --background-base: var(--background-color);
  --input-highlight: white;
  --text-base: white;
`;

export const LoginBox = styled.div`
  background-color: black;
  row-gap: normal;
  border-radius: 8px;

  max-width: 734px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled(Heading1)`
  text-align: center;
  margin: 80px 0px 48px;
  color: white;
`;

export const LoginFormContainer = styled.div`
  width: 324px;
  margin: 0px auto;
  padding-bottom: 0px;
`;

export const LoginFormGroup = styled(FormGroup)`
  width: inherit;
  padding-bottom: 16px;
  label,
  legend {
    padding-block-end: 8px;
    color: white;
  }
`;

export const LoginButton = styled(ThemeButton)`
  width: 100%;
  span {
    color: black;
    width: inherit;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--link-color, white);
`;

export const SignUpMessageContainer = styled.span`
  text-align: center;
`;

export const Separator = styled.hr`
  margin: 32px 100px;
  border-right: none;
  border-bottom: none;
  border-left: none;
  border-image: initial;
  border-top: 1px solid rgb(41, 41, 41);
`;
