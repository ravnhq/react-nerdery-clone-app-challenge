import { NavLink, NavLinkList, NavLinks } from './nav-link-list';
import { getNavLinks } from '../services/static-data';
import { UnauthCollectionList, AuthCollectionList } from './collection-list';
import { LegalLinks } from './legal-links';
import { LogoDiv, SidebarDiv, SidebarNav } from './styles';
import { PlusIcon, SpotifyLogo } from '../assets/icons';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import { Flex } from '../shared/ui/flex';
import { useLibrary } from '../hooks/useLibrary';

const UnauthenticatedSidebar = ({ navLinks }: NavLinks) => (
  <SidebarDiv>
    <SidebarNav>
      <LogoDiv>
        <SpotifyLogo />
      </LogoDiv>
      <NavLinkList navLinks={navLinks} />
      <UnauthCollectionList />
      <LegalLinks />
    </SidebarNav>
  </SidebarDiv>
);

const NavlinkBox = styled.div`
  background-color: var(--main-base-color);
  margin: 8px 10px 0px;
  border-radius: 8px;
  ul {
    padding: 6px 0;
    li {
      padding: 4px 12px;
    }
  }
`;

const CollectionBox = styled(NavlinkBox)`
  overflow: hidden;
  padding: 10px 0px;
  flex: 1;
`;

const LibraryNavItem = styled(NavLink)`
  margin-left: 15px;
`;

const AuthSidebarDiv = styled(SidebarDiv)`
  width: 300px;
  height: 100vh;
  --nav-link-size: 1rem;
`;

const IconButtonContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
    fill: var(--main-text-color);
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    svg {
      fill: var(--base);
    }
  }
`;

const AuthenticatedSidebar = ({ navLinks }: NavLinks) => {
  const libraryNav = getNavLinks([2])[0];

  const { addOwnPlaylist } = useLibrary();

  return (
    <AuthSidebarDiv>
      <SidebarNav>
        <NavlinkBox>
          <NavLinkList navLinks={navLinks} />
        </NavlinkBox>
        <CollectionBox>
          <Flex
            justifyContent="space-between"
            align="center"
            margin="0 16px 0 0"
          >
            <LibraryNavItem {...libraryNav} icon={libraryNav.activeIcon} />
            <IconButtonContainer onClick={addOwnPlaylist}>
              <PlusIcon />
            </IconButtonContainer>
          </Flex>
          <AuthCollectionList />
        </CollectionBox>
      </SidebarNav>
    </AuthSidebarDiv>
  );
};

export const Sidebar = () => {
  const { isLogged } = useAuth();
  return isLogged ? (
    <AuthenticatedSidebar navLinks={getNavLinks([0, 1])} />
  ) : (
    <UnauthenticatedSidebar navLinks={getNavLinks([0, 1, 2])} />
  );
};
