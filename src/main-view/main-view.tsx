import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const MainDiv = styled.div`
  grid-area: 'main-view';
  background-color: #121212;
`;

function MainView() {
  return (
    <MainDiv>
      <Routes>
        <Route index element={<div>Main</div>} />
        <Route path="search" element={<div>Search</div>} />
        <Route path="login" element={<div>Login</div>} />
      </Routes>
    </MainDiv>
  );
}

export { MainView };
