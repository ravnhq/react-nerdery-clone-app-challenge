import styled from 'styled-components';

const MainDiv = styled.div`
  grid-area: 'main-view';
  background-color: #121212;
`;

function MainView() {
  return <MainDiv>Main</MainDiv>;
}

export { MainView };
