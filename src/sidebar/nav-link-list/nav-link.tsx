import { ElementType } from 'react';
import { NavLinkContainer } from './styles';

export interface NavLinkProps {
  activeIcon: ElementType;
  icon: ElementType;
  to: string;
  name: string;
  active?: boolean;
}

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
