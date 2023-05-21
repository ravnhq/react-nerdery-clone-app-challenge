import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkListElement = styled.ul`
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const NavLinkItem = styled.li`
  padding: 0 8px;
`;

export const NavLinkContainer = styled(NavLink)`
  height: 40px;
  align-items: center;
  display: flex;
  gap: 16px;
  padding: 0 16px;
  color: var(--unactive);
  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: color;
  transition-timing-function: linear;

  text-decoration: none;
  span {
    font-weight: 700;
    font-size: 0.875rem;
  }

  .icon.active {
    display: none;
  }

  .icon {
    display: block;
    fill: currentColor;
  }

  &:hover,
  &.active {
    color: white;
  }

  &.active {
    .icon {
      display: none;
    }
    .icon.active {
      display: block;
    }
  }
`;
