import React from 'react';
import { StyledSignUpContainer } from '../../components/Styles/SignUp/SignUpContainer.styles';
import { Navigate } from 'react-router';
import { StyledLogo } from '../../components/Styles/SignUp/Logo.styles';

const SignUp: React.FunctionComponent = () => {
    return (
        <StyledSignUpContainer>
            <StyledLogo href="/">
                <img src="/svg/logo-extended.svg" alt="" />
            </StyledLogo>
            <h2>Sign up for free to start listening.</h2>
        </StyledSignUpContainer>
    );
};

export default SignUp;
