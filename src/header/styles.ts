import styled from 'styled-components';
import { ThemeButton } from '../shared/ui/button';

export const HeaderWrapper = styled.div`
  grid-area: main-view;
  height: 64px;
  min-width: 0;
  z-index: 2;
`;

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 64px;
  justify-content: space-between;
  padding: 16px 32px;
  padding-inline-end: 32px;
  position: relative;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HistoryButtonContainer = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  justify-content: center;
  position: relative;
  width: 32px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  svg {
    fill: currentColor;
  }
`;

export const RegisterButton = styled(ThemeButton)`
  padding-block: 8px;
  padding-inline: 32px;
  padding-inline-start: 8px;
`;

export const LoginButton = styled(RegisterButton)`
  padding: 0;
`;
