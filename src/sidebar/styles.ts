import styled from 'styled-components';

export const SidebarDiv = styled.div`
  width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  grid-area: left-sidebar;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 18px;
  flex-shrink: 0;
`;
