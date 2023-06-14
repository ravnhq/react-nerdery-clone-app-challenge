import React from 'react';
import { StyledSignUpContainer } from '../../components/Styles/SignUp/SignUpContainer.styles';
import { StyledLogo } from '../../components/Styles/SignUp/Logo.styles';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';

type FormValues = {
    email: string;
    password: string;
    profile_name: string;
    day: string;
    month: string;
    year: string;
    gender: string;
};

const SignUp: React.FunctionComponent = () => {
    const { signup, error } = useAuthorizationContext();

    const onSubmit = async (data: FormValues) => {
        const newUser = {
            email: data.email,
            password: data.password,
            name: data.profile_name,
            birth_date: `${data.year}-${data.month}-${data.day}`,
            gender: data.gender,
        };

        signup(newUser);
    };

    return (
        <StyledSignUpContainer>
            <StyledLogo href="/">
                <img src="/svg/logo-extended.svg" alt="" />
            </StyledLogo>
            <h2>Sign up for free to start listening.</h2>
            <SignUpForm error={error} onSubmit={onSubmit} />
        </StyledSignUpContainer>
    );
};

export default SignUp;
