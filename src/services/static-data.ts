import {
  CollectionActiveIcon,
  CollectionIcon,
  HomeActiveIcon,
  HomeIcon,
  SearchActiveIcon,
  SearchIcon,
} from '../assets/icons';
import { NavLinkProps } from '../shared/types/nav-link';

export function getLegalLinks() {
  return [
    {
      title: 'Legal',
      url: '/legal',
    },
    {
      title: 'Centro de privacidad',
      url: '/privacy-center',
    },
    {
      title: 'Política de privacidad',
      url: '/privacy-policy',
    },
    {
      title: 'Cookies',
      url: '/cookies',
    },
    {
      title: 'Información sobre anuncios',
      url: '/ad-info',
    },
  ];
}

export function getNavLinks() {
  const links: NavLinkProps[] = [
    {
      icon: HomeIcon,
      activeIcon: HomeActiveIcon,
      name: 'Inicio',
      to: '/',
    },
    {
      icon: SearchIcon,
      activeIcon: SearchActiveIcon,
      to: '/search',
      name: 'Buscar',
    },
    {
      icon: CollectionIcon,
      activeIcon: CollectionActiveIcon,
      to: '/library',
      name: 'Tu biblioteca',
    },
  ];
  return links;
}
