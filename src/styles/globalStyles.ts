import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
       *{
          font-family: 'SF Pro Display';
       }
       *,*::before,*::after{
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-size: 14px;
       }
`;

export default GlobalStyle;
