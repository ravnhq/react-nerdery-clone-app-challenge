import styled from 'styled-components';

import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as CollectionIcon } from '../../assets/collection-icon.svg';

import { ReactComponent as HomeActiveIcon } from '../../assets/home-active-icon.svg';
import { ReactComponent as SearchActiveIcon } from '../../assets/search-active-icon.svg';
import { ReactComponent as CollectionActiveIcon } from '../../assets/collection-active-icon.svg';

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

export const NavLinkContainer = styled.a<{ active?: boolean }>`
  height: 40px;
  align-items: center;
  display: flex;
  gap: 16px;
  padding: 0 16px;
  color: ${({ active }) => (active ? 'white' : 'var(--unactive)')};
  cursor: pointer;

  transition-duration: 0.2s;
  transition-property: color;
  transition-timing-function: linear;
  span {
    font-weight: 700;
    font-size: 0.875rem;
  }

  &:hover {
    color: white;
  }
`;

export const StyledHomeIcon = styled(HomeIcon)`
  fill: currentColor;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  fill: currentColor;
`;
export const StyledCollectionIcon = styled(CollectionIcon)`
  fill: currentColor;
`;

export const StyledHomeActiveIcon = styled(HomeActiveIcon)`
  fill: currentColor;
`;

export const StyledSearchActiveIcon = styled(SearchActiveIcon)`
  fill: currentColor;
`;
export const StyledCollectionActiveIcon = styled(CollectionActiveIcon)`
  fill: currentColor;
`;
