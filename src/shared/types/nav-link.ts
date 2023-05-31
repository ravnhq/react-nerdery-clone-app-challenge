import { ElementType } from 'react';

export interface NavLinkProps {
  activeIcon: ElementType;
  icon: ElementType;
  to: string;
  name: string;
}
