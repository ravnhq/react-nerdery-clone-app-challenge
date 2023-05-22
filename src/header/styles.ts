import styled from 'styled-components';

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

export const RegisterButton = styled.button`
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;

  background-color: transparent;
  border: 0px;
  border-radius: 500px;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  touch-action: manipulation;
  transition-duration: 33ms;
  transition-property: background-color, border-color, color, box-shadow, filter,
    transform;
  user-select: none;
  vertical-align: middle;
  transform: translate3d(0px, 0px, 0px);
  color: var(--soft, #6a6a6a);
  min-inline-size: 0px;
  padding-block: 8px;
  min-block-size: 48px;
  padding-inline: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.04);
    color: var(--base, #000000);
  }

  padding-inline-start: 8px;

  span {
    box-sizing: border-box;
    position: relative;
    background-color: var(--background-base, #ffffff);
    color: var(--text-base, #000000);
    display: flex;
    border-radius: 500px;
    font-size: inherit;
    min-block-size: 48px;
    align-items: center;
    justify-content: center;
    padding-block: 8px;
    padding-inline: 32px;
  }
`;

export const LoginButton = styled(RegisterButton)`
  padding: 0;
`;
