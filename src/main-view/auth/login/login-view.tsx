import { SpotifyLogo } from '../../../assets/icons';
import { Form, StyledErrorMessage, TextInput } from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginInputs } from '../../../shared/types/auth-inputs';
import { useAuth } from '../../../hooks/useAuth';
import { emailFormOptions, isNeeded } from '../utils';
import {
  LoginBox,
  LoginButton,
  LoginContainer,
  LoginFormContainer,
  LoginFormGroup,
  LoginHeader,
  LoginMain,
  LoginTitle,
  Separator,
  SignUpMessageContainer,
  StyledLink,
} from './style';

export const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ mode: 'onTouched', reValidateMode: 'onChange' });

  const navigate = useNavigate();

  const { login } = useAuth();
  const onSubmit: SubmitHandler<LoginInputs> = data => {
    login(data)
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert(`There was an error: ${err.message}`);
      });
  };
  return (
    <LoginContainer>
      <LoginHeader>
        <Link to="/">
          <SpotifyLogo />
        </Link>
      </LoginHeader>
      <LoginMain>
        <LoginBox>
          <Separator />
          <LoginTitle>Log in on Spotify</LoginTitle>
          <Form>
            <LoginFormContainer>
              <LoginFormGroup>
                <label htmlFor="email">Email</label>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register('email', emailFormOptions)}
                />
                <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
              </LoginFormGroup>
              <LoginFormGroup>
                <label htmlFor="password">Password</label>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                    validate: {
                      required: isNeeded(),
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        'Password needs to have at least 8 characters, a number and a letter',
                    },
                  })}
                />
                <StyledErrorMessage>
                  {errors.password?.message}
                </StyledErrorMessage>
              </LoginFormGroup>
              <LoginButton
                color="var(--green)"
                onClick={handleSubmit(onSubmit)}
              >
                <span>Log in</span>
              </LoginButton>
            </LoginFormContainer>
          </Form>

          <Separator />
          <SignUpMessageContainer>
            Do you not have an account?
            <StyledLink to="/signup"> Subscribe to Spotify</StyledLink>
          </SignUpMessageContainer>
        </LoginBox>
      </LoginMain>
    </LoginContainer>
  );
};
