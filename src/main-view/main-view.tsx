import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HomeView } from './home-view';

const MainDiv = styled.div`
  grid-area: main-view;
  background-color: #121212;
  overflow-y: scroll;
`;

function MainView() {
  return (
    <MainDiv>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="search" element={<div>Search</div>} />
        <Route path="login" element={<div>Login</div>} />
      </Routes>
    </MainDiv>
  );
}

export { MainView };
