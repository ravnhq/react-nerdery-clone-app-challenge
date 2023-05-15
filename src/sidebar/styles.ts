import styled from 'styled-components';

export const SidebarDiv = styled.div`
  width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  grid-area: left-sidebar;
  --sidebar-item-height: 32px;
  --sidebar-padding-left: 24px;
  --sidebar-padding-right: 24px;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  height: 100%;
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 18px;
  flex-shrink: 0;
`;
