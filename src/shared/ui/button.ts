import styled from 'styled-components';

export const ThemeButton = styled.button`
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
  min-block-size: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.04);
    color: var(--base, #000000);
  }

  span {
    box-sizing: border-box;
    position: relative;
    background-color: ${props => props.color || 'white'};
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
