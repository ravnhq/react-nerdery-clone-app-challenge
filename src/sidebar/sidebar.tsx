import styled from 'styled-components';
import { ReactComponent as SpotifyLogo } from '../assets/logo.svg';
import { NavLinkList } from './nav-link-list';

import { LogoDiv, SidebarDiv, SidebarNav } from './styles';

export const CollectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  margin-top: 24px;
  position: relative;
`;

export const CollectionList = () => <div>Holi</div>;

export const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarNav>
        <LogoDiv>
          <SpotifyLogo />
        </LogoDiv>
        <NavLinkList />
      </SidebarNav>
    </SidebarDiv>
  );
};
