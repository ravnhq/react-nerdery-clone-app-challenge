import {
  CollectionActiveIcon,
  CollectionIcon,
  HomeActiveIcon,
  HomeIcon,
  SearchActiveIcon,
  SearchIcon,
} from '../assets/icons';
import { HOME_ROUTE, SEARCH_ROUTE } from '../shared/constants/router';
import { NavLinkProps } from '../shared/types/nav-link';

export function getLegalLinks() {
  return [
    {
      title: 'Legal',
      url: '/legal',
    },
    {
      title: 'Privacy Center',
      url: '/privacy-center',
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      title: 'Cookies',
      url: '/cookies',
    },
    {
      title: 'About Ads',
      url: '/ad-info',
    },
  ];
}

const links: NavLinkProps[] = [
  {
    icon: HomeIcon,
    activeIcon: HomeActiveIcon,
    name: 'Home',
    to: HOME_ROUTE,
  },
  {
    icon: SearchIcon,
    activeIcon: SearchActiveIcon,
    to: SEARCH_ROUTE,
    name: 'Search',
  },
  {
    icon: CollectionIcon,
    activeIcon: CollectionActiveIcon,
    to: '/library',
    name: 'Your library',
  },
];

export function getNavLinks(idxs: number[] = [0, 1, 2]) {
  return links.filter((_, idx) => idxs.includes(idx));
}
