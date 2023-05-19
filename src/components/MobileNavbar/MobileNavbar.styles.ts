import styled from 'styled-components';

export const StyledMobileNavbar = styled.div`
    padding: 5px 16px;
    display: flex;
    justify-content: space-between;
    position: relative;

    img {
        width: 100px;
    }

    & div[role='button'] {
        z-index: 100;
    }
`;

export const StyledNavBarContainer = styled.div`
    box-sizing: border-box;
    background-color: black;
    width: 100%;
    inset: 0;
    position: sticky;
`;

export const StyledMenu = styled.div`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 56px 40px;

    transition: all 0.3s ease-in-out;
    &[aria-expanded='true'] {
        opacity: 1;
        top: 0;
    }

    &[aria-expanded='false'] {
        opacity: 0;
        top: -100%;
    }
`;
