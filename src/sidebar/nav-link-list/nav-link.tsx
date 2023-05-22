import { NavLinkContainer } from './styles';
import { NavLinkProps } from '../../shared/types/nav-link';

export const NavLink = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  name,
  to,
}: NavLinkProps) => {
  return (
    <NavLinkContainer to={to}>
      <Icon className="icon" />
      <ActiveIcon className="icon active" />
      <span>{name}</span>
    </NavLinkContainer>
  );
};
