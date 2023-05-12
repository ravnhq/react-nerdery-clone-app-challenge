import { Resolver, useForm } from 'react-hook-form';
import { StyledButton } from '../../components/Styles/Button.styles';
import { ErrorLabel } from '../../components/Styles/ErrorLabel.styles';
import { StyledForm } from '../../components/Styles/Form.styles';
import { StyledInput } from '../../components/Styles/Input.styles';
import { StyledLabel } from '../../components/Styles/Label.styles';
import {
    SwitchLabel,
    Switch,
    SwitchInput,
} from '../../components/Styles/Toggle.styles';
import React from 'react';

type FormValues = {
    email: string;
    password: string;
    remember_me: boolean;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
            ? {
                  email: {
                      type: 'required',
                      message:
                          'Please enter your Spotify username or email address.',
                  },
                  password: {
                      type: 'required',
                      message: 'Please enter your password.',
                  },
              }
            : {},
    };
};

const Login: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: 'onSubmit',
        defaultValues: {
            remember_me: true,
        },
    });
    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h1>Log in to Spotify</h1>
                <span>
                    <StyledLabel htmlFor="email">Email or username</StyledLabel>
                    <StyledInput
                        id="email"
                        type="text"
                        placeholder="Email or username"
                        {...register('email')}
                    />
                    {errors?.email && (
                        <ErrorLabel>{errors.email.message}</ErrorLabel>
                    )}
                </span>
                <span>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledInput
                        id="password"
                        type="text"
                        placeholder="Password"
                        {...register('password')}
                    />
                    {errors?.password && (
                        <ErrorLabel>{errors.password.message}</ErrorLabel>
                    )}
                </span>
                <SwitchLabel htmlFor="remember_me">
                    <span>Remember Me</span>
                    <SwitchInput
                        id="remember_me"
                        type="checkbox"
                        {...register('remember_me')}
                    />
                    <Switch />
                </SwitchLabel>
                <StyledButton type="submit">Log In</StyledButton>
            </StyledForm>
        </>
    );
};

export default Login;
