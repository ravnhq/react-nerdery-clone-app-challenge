import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import GlobalStyle from "./styles/globalStyles.ts";
import AppRouter from "./router/AppRouter.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { WishlistProvider } from "./context/WishlistContext.tsx";
import { AxiosInterceptor } from "./interceptor/axiosInterceptor.tsx";

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <WishlistProvider>
          <AppRouter />
        </WishlistProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
