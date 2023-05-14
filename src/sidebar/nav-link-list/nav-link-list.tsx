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
    icon: <StyledHomeIcon />,
    activeIcon: <StyledHomeActiveIcon />,
    name: 'Inicio',
    active: true,
  },
  {
    icon: <StyledSearchIcon />,
    activeIcon: <StyledSearchActiveIcon />,
    name: 'Buscar',
    active: false,
  },
  {
    icon: <StyledCollectionIcon />,
    activeIcon: <StyledCollectionActiveIcon />,
    name: 'Tu biblioteca',
    active: false,
  },
];

export const NavLinkList = () => (
  <NavLinkListElement>
    <NavLinkItem>
      {links.map(link => (
        <NavLink
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
