import { Resolver, useForm } from 'react-hook-form';
import { StyledButton } from '../../../components/Styles/Inputs/Button.styles';
import { StyledForm } from '../../../components/Styles/Login/LoginForm.styles';
import { StyledInput } from '../../../components/Styles/Inputs/Input.styles';
import { StyledLabel } from '../../../components/Styles/Label.styles';
import {
    SwitchLabel,
    Switch,
    SwitchInput,
} from '../../../components/Styles/Inputs/Toggle.styles';
import { StyledLink } from '../../../components/Styles/Link.Styles';
import { ErrorLabel } from '../../../components/ErrorLabel';
import { ErrorBanner } from '../../../components/ErrorBanner';

export type FormValues = {
    email: string;
    password: string;
    remember_me: boolean;
};

interface Props {
    onSubmit: (data: FormValues) => void;
    error?: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email && values.password ? values : {},
        errors: !values.email
            ? {
                  email: {
                      type: 'required',
                      message: 'Please enter your username or email address.',
                  },
                  password: {
                      type: 'required',
                      message: 'Please enter your password.',
                  },
              }
            : {},
    };
};

const LoginForm = ({ onSubmit, error }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver,
        defaultValues: {
            remember_me: true,
        },
    });
    return (
        <StyledForm role="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Log in to Spotify</h1>
            {Boolean(error) && <ErrorBanner message={error} />}
            <div>
                <div>
                    <StyledLabel htmlFor="email">Email or username</StyledLabel>
                    <StyledInput
                        data-errors={errors.email !== undefined}
                        id="email"
                        type="text"
                        placeholder="Email or username"
                        {...register('email')}
                    />
                    {errors?.email && (
                        <ErrorLabel message={errors.email.message || ''} />
                    )}
                </div>
                <div>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledInput
                        data-errors={errors.password !== undefined}
                        id="password"
                        type="password"
                        placeholder="Password"
                        {...register('password')}
                    />
                    {errors?.password && (
                        <ErrorLabel message={errors.password.message || ''} />
                    )}
                </div>
                <SwitchLabel htmlFor="remember_me">
                    <SwitchInput
                        data-testid="remember-me-switch-input"
                        id="remember_me"
                        type="checkbox"
                        {...register('remember_me')}
                    />
                    <Switch data-testid="remember-me-switch" tabIndex={0} />
                    <span>Remember Me</span>
                </SwitchLabel>
                <StyledButton type="submit">Log In</StyledButton>
                <StyledLink>
                    Don't have an account?
                    <a href="/signup">Sign up for Spotify</a>
                </StyledLink>
            </div>
        </StyledForm>
    );
};

export default LoginForm;
