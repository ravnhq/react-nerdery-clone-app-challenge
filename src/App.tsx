import styled from 'styled-components';
import { DesktopLayout } from './desktop-layout';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/auth-context';
import { LoginView, SignupView } from './main-view/auth/';
import { LibraryProvider } from './context/library-context';
import { EntityContextMenuProvider } from './context/entity-context-menu';
import { HomeView } from './main-view/home-view';
import { SearchResultsView } from './main-view/search-categorie-view/search-results-view';
import { SearchResultsFilter } from './main-view/search-categorie-view/search-results-filter';
import { SingleItemView } from './main-view';
import { SearchCategorieView } from './main-view/search-categorie-view/search-view';

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

const RootLayout = (
  <MainDiv>
    <LibraryProvider>
      <EntityContextMenuProvider>
        <DesktopLayout />
      </EntityContextMenuProvider>
    </LibraryProvider>
  </MainDiv>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="login" element={<LoginView />} />
          <Route path="signup" element={<SignupView />} />
          <Route path="/" element={RootLayout}>
            <Route index element={<HomeView />} />
            <Route path="/search">
              <Route index element={<SearchCategorieView />} />
              <Route path=":text" element={<SearchResultsView />} />
              <Route path=":text/:filter" element={<SearchResultsFilter />} />
            </Route>
            <Route path="/entity/:type/:id" element={<SingleItemView />} />

            <Route
              path="*"
              element={
                <div>
                  <h1>Route Not Found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
