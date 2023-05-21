import { NavLinkList } from './nav-link-list';

import { LogoDiv, SidebarDiv, SidebarNav } from './styles';
import { CollectionList } from './collection-list';
import { LegalLinks } from './legal-links';
import { SpotifyLogo } from '../assets/icons';

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
