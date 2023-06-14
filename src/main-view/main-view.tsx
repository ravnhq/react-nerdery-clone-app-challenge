import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../header';

import { useEntityContextMenu } from '../hooks/useContextMenu';
import { useRef } from 'react';
import { ItemContextMenu } from '../context-menu/item-context-menu';
import { useAuth } from '../hooks/useAuth';

const MainDiv = styled.div`
  grid-area: main-view;
  background-color: var(--main-base-color);
  overflow-y: scroll;

  .header-spacer {
    height: 64px;
  }
`;

function MainView() {
  const { context } = useEntityContextMenu(true);
  const contextMenuRef = useRef<HTMLElement>(null);

  const { isLogged } = useAuth();

  return (
    <>
      <Header />
      <MainDiv data-testid="mainview-element">
        <div className="header-spacer" />
        {isLogged ? (
          <ItemContextMenu
            menuRef={contextMenuRef}
            isToggled={context.isToggled}
            positionX={context.x}
            positionY={context.y}
            targetedItem={context.extraData}
          />
        ) : null}
        <Outlet />
      </MainDiv>
    </>
  );
}

export { MainView };
