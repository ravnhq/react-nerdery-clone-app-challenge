import styled from 'styled-components';
import { Sidebar } from '../sidebar/sidebar';
import { MainView } from '../main-view/main-view';
import { Header } from '../header';

const LayoutDiv = styled.div`
  background-color: var(--background-color);
  display: grid;
  grid-template-areas:
    'left-sidebar main-view right-sidebar'
    'now-playing-bar now-playing-bar now-playing-bar';
  min-height: 100%;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
  height: 100%;
  width: 100%;
  --sidebar-width: 232px;
`;

function DesktopLayout() {
  return (
    <LayoutDiv>
      <Sidebar />
      <Header />
      <MainView />
    </LayoutDiv>
  );
}

export { DesktopLayout };
