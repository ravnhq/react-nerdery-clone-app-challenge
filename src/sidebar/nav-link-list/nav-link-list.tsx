import { NavLink } from './nav-link';
import { NavLinkItem, NavLinkListElement } from './styles';
import { getNavLinks } from '../../services/static-data';

const links = getNavLinks();

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
        />
      ))}
    </NavLinkItem>
  </NavLinkListElement>
);
