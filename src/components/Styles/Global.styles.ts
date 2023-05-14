import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham.woff') format('woff')
    }

    button {
        all: unset;
        cursor: pointer;
    }

    a {
        all: unset;
    }

    * {
        box-sizing: border-box;
        font-family: 'Gotham', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bg};
    };
`;

export { StyledGlobal };
