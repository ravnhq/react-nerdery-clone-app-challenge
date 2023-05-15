import { ReactComponent as SpotifyLogo } from '../assets/logo.svg';
import { NavLinkList } from './nav-link-list';

import { LogoDiv, SidebarDiv, SidebarNav } from './styles';
import { CollectionList } from './collection-list/collection-list';
import { LegalLinks } from './legal-links/legal-links';

export const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarNav>
        <LogoDiv>
          <SpotifyLogo />
        </LogoDiv>
        <NavLinkList />
        <CollectionList />
        <LegalLinks />
      </SidebarNav>
    </SidebarDiv>
  );
};
