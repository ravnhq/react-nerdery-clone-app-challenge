import styled from 'styled-components';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const StyledMobileNavbar = styled.div`
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

const StyledNavBarContainer = styled.div`
    box-sizing: border-box;
    background-color: black;
    width: 100%;
    inset: 0;
    position: sticky;
`;

const StyledMenu = styled.div`
    position: absolute;
    background-color: black;
    width: 100vw;
    height: 100vh;
    &[aria-expanded='true'] {
        opacity: 1;
        top: 0;
        transition: all 0.3s ease-in-out;
    }

    &[aria-expanded='false'] {
        opacity: 0;
        top: -100%;
    }
`;

const MobileNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <StyledNavBarContainer>
            <StyledMobileNavbar>
                <img src="/svg/logo-extended.svg" alt="" />
                <Hamburger
                    toggle={setToggleMenu}
                    toggled={toggleMenu}
                    color="white"
                    direction="left"
                    size={28}
                />
            </StyledMobileNavbar>
            <StyledMenu aria-expanded={toggleMenu} />
        </StyledNavBarContainer>
    );
};

export default MobileNavbar;
