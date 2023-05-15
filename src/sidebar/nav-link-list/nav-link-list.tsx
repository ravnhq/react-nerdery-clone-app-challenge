import {
  StyledCollectionActiveIcon,
  StyledCollectionIcon,
  StyledHomeActiveIcon,
  StyledHomeIcon,
  StyledSearchActiveIcon,
  StyledSearchIcon,
} from './styles';
import { NavLink, NavLinkProps } from './nav-link';
import { NavLinkItem, NavLinkListElement } from './styles';

const links: NavLinkProps[] = [
  {
    icon: StyledHomeIcon,
    activeIcon: StyledHomeActiveIcon,
    name: 'Inicio',
    to: '/',
    active: true,
  },
  {
    icon: StyledSearchIcon,
    activeIcon: StyledSearchActiveIcon,
    to: '/search',
    name: 'Buscar',
    active: false,
  },
  {
    icon: StyledCollectionIcon,
    activeIcon: StyledCollectionActiveIcon,
    to: '/library',
    name: 'Tu biblioteca',
    active: false,
  },
];

export const NavLinkList = () => (
  <NavLinkListElement>
    <NavLinkItem>
      {links.map(link => (
        <NavLink
          to={link.to}
          key={link.name}
          icon={link.icon}
          activeIcon={link.activeIcon}
          name={link.name}
          active={link.active}
        />
      ))}
    </NavLinkItem>
  </NavLinkListElement>
);
