import { NavLinkContainer } from './styles';
import { NavLinkProps } from '../../shared/types/nav-link';
import { SimpleComponent } from '../../shared/types/simple-component';

export const NavLink = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  name,
  to,
  className,
}: NavLinkProps & SimpleComponent) => {
  return (
    <NavLinkContainer to={to} className={className}>
      <Icon className="icon" />
      <ActiveIcon className="icon active" />
      <span>{name}</span>
    </NavLinkContainer>
  );
};
