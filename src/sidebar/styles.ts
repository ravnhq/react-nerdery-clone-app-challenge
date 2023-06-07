import styled from 'styled-components';

export const SidebarDiv = styled.div<{ width?: number }>`
  width: ${props => props.width ?? 232}px;
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
  height: 100%;
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 0px;
  margin-bottom: 18px;
  flex-shrink: 0;
`;
