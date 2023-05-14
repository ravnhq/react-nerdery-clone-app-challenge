import styled from 'styled-components';
import { DesktopLayout } from './desktop-layout/desktop-layout';
import GlobalStyle from './globalStyles';

const MainDiv = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  z-index: 0;
  height: 100%;
  border: 0;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <MainDiv>
      <GlobalStyle />
      <DesktopLayout />
    </MainDiv>
  );
}

export default App;
