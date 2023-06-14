import styled from 'styled-components';
import { Heading2 } from '../../../shared/ui/heading2';
import { DownArrowIcon, SpotifyLogo } from '../../../assets/icons';
import { ExtraMessageContainer, Form } from '../styles';

export const SignUpHeading = styled(Heading2)`
  color: black;
  letter-spacing: -0.08em;
  line-height: 36px;
  font-weight: 700;
  font-size: 2rem;
`;

export const Logo = styled(SpotifyLogo)`
  path {
    fill: black;
  }
`;

export const DOBDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SelectInputIcon = styled(DownArrowIcon)`
  color: var(--sub);
  pointer-events: none;
  position: absolute;
  right: 14px;
`;

export const SelectInputContainer = styled.div`
  position: relative;
  inline-size: 100%;
  display: flex;
  align-items: center;
`;

export const SignUpForm = styled(Form)`
  width: 420px;
`;

export const LoginMessageContainer = styled(ExtraMessageContainer)`
  --link-color: var(--green);
`;
