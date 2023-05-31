import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HomeView } from './home-view';

const MainDiv = styled.div`
  grid-area: main-view;
  background-color: var(--main-base-color);
  overflow-y: scroll;

  .header-spacer {
    height: 64px;
  }
`;

function MainView() {
  return (
    <MainDiv>
      <div className="header-spacer" />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="search" element={<div>Search</div>} />
        <Route path="login" element={<div>Login</div>} />
      </Routes>
    </MainDiv>
  );
}

export { MainView };
