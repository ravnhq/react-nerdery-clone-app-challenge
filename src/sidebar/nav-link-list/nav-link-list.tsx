import { NavLink } from './nav-link';
import { NavLinkItem, NavLinkListElement } from './styles';
import { NavLinkProps } from '../../shared/types/nav-link';
export interface NavLinks {
  navLinks: NavLinkProps[];
}

export const NavLinkList = ({ navLinks }: NavLinks) => {
  return (
    <NavLinkListElement>
      {navLinks.map(link => (
        <NavLinkItem key={link.to}>
          <NavLink
            to={link.to}
            icon={link.icon}
            activeIcon={link.activeIcon}
            name={link.name}
          />
        </NavLinkItem>
      ))}
    </NavLinkListElement>
  );
};
