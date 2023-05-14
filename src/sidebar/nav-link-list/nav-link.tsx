import { NavLinkContainer } from './styles';

export interface NavLinkProps {
  activeIcon?: React.ReactNode;
  icon?: React.ReactNode;
  name: string;
  active?: boolean;
}

export const NavLink = ({ icon, name, active, activeIcon }: NavLinkProps) => {
  return (
    <NavLinkContainer active={active}>
      {active ? activeIcon : icon}
      <span>{name}</span>
    </NavLinkContainer>
  );
};
