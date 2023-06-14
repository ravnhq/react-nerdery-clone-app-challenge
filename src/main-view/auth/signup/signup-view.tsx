import { Flex } from '../../../shared/ui/flex';

import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { ThemeButton } from '../../../shared/ui/button';
import { emailFormOptions, isNeeded, passwordFormOptions } from '../utils';
import { SignupInputs } from '../../../shared/types/signup-inputs';
import {
  DOBDiv,
  RadioGroupContainer,
  SelectInputContainer,
  SelectInputIcon,
  SignUpHeading,
  Logo,
  SignUpForm,
  LoginMessageContainer,
} from './styles';
import {
  StyledErrorMessage,
  FormGroup,
  SelectInput,
  TextInput,
  StyledLink,
} from '../styles';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const genderRegister = (registerCb: UseFormRegister<SignupInputs>) =>
  registerCb('gender', {
    validate: {
      required: isNeeded(),
    },
  });

export const SignupView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({ mode: 'onTouched', reValidateMode: 'onChange' });

  const navigate = useNavigate();

  const { register: registerUser } = useAuth();
  const onSubmit: SubmitHandler<SignupInputs> = data => {
    registerUser(data)
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert(`There was an error: ${String(err)}`);
      });
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      align="center"
      margin="40px 0"
      gap="24px"
    >
      <Flex direction="column" align="center" gap="30px">
        <Link to="/">
          <Logo fill="black" />
        </Link>
        <SignUpHeading color="black">
          Registrate gratis para escuchar
        </SignUpHeading>
      </Flex>

      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label htmlFor="email-input">What is yout email address?</label>
          <TextInput
            id="email-input"
            placeholder="Your email address here."
            {...register('email', emailFormOptions)}
          />
          <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="password-input">Create a password</label>
          <TextInput
            type="password"
            id="password-input"
            placeholder="Create a password"
            {...register('password', passwordFormOptions)}
          />
          <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="username-input">How you want to be called?</label>
          <TextInput
            id="username-input"
            placeholder="Put your username"
            {...register('username', {
              validate: {
                required: isNeeded(),
                maxLength: v =>
                  v.length < 20 ||
                  "Your username can't have more than 20 characters",
              },
            })}
          />
          <StyledErrorMessage>{errors.username?.message}</StyledErrorMessage>
        </FormGroup>
        <FormGroup>
          <legend>When is your birthday?</legend>
          <DOBDiv id="dob-input">
            <FormGroup style={{ width: '20%' }}>
              <label htmlFor="day-input">Day</label>
              <TextInput
                id="day-input"
                inputMode="numeric"
                placeholder="DD"
                maxLength={2}
                {...register('birthday.day', {
                  validate: {
                    required: isNeeded('Please enter a day'),
                  },
                  pattern: {
                    value: /^((0?[1-9])|([12][0-9])|(3[01]))$/,
                    message: 'You need to put a valid day from a month',
                  },
                })}
              />
            </FormGroup>
            <FormGroup style={{ width: '60%' }}>
              <label htmlFor="month-input">Month</label>
              <SelectInputContainer>
                <SelectInput
                  id="month-input"
                  defaultValue="00"
                  {...register('birthday.month', {
                    validate: {
                      required: isNeeded(),
                      validMonth: v =>
                        v.toString() !== '00' || 'Please select a month',
                    },
                  })}
                >
                  <option value="00" disabled>
                    Month
                  </option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </SelectInput>
                <SelectInputIcon />
              </SelectInputContainer>
            </FormGroup>
            <FormGroup style={{ width: '20%' }}>
              <label htmlFor="year-input">Year</label>
              <TextInput
                id="year-input"
                inputMode="numeric"
                placeholder="AAAA"
                maxLength={4}
                {...register('birthday.year', {
                  pattern: {
                    value: /^(19[0-9]{2})|(200)[0-9]$/,
                    message: 'Enter a valid year',
                  },
                  validate: {
                    required: isNeeded(),
                  },
                })}
              />
            </FormGroup>
          </DOBDiv>
          <StyledErrorMessage>
            {errors.birthday?.day?.message}
          </StyledErrorMessage>
          <StyledErrorMessage>
            {errors.birthday?.month?.message}
          </StyledErrorMessage>
          <StyledErrorMessage>
            {errors.birthday?.year?.message}
          </StyledErrorMessage>
        </FormGroup>
        <FormGroup>
          <legend>What's yout gender?</legend>
          <RadioGroupContainer>
            <Flex>
              <input
                type="radio"
                id="gender-option-male"
                value="male"
                {...genderRegister(register)}
              />
              <label htmlFor="gender-option-male">
                <span>Male</span>
              </label>
            </Flex>
            <Flex>
              <input
                type="radio"
                id="gender-option-female"
                value="female"
                {...genderRegister(register)}
              />
              <label htmlFor="gender-option-female">
                <span>Female</span>
              </label>
            </Flex>
            <Flex>
              <input
                type="radio"
                id="gender-option-nobinary"
                value="nobinary"
                {...genderRegister(register)}
              />
              <label htmlFor="gender-option-nobinary">
                <span>No binary</span>
              </label>
            </Flex>
            <Flex>
              <input
                type="radio"
                id="gender-option-other"
                {...genderRegister(register)}
                value="other"
              />
              <label htmlFor="gender-option-other">
                <span>Other</span>
              </label>
            </Flex>
            <Flex>
              <input
                type="radio"
                id="gender-option-prefernottosay"
                value="prefernottosay"
                {...genderRegister(register)}
              />
              <label htmlFor="gender-option-prefernottosay">
                <span>Prefer not to say</span>
              </label>
            </Flex>
          </RadioGroupContainer>

          <StyledErrorMessage>{errors.gender?.message}</StyledErrorMessage>
        </FormGroup>

        <ThemeButton type="submit" color="var(--green)">
          <span>Sign up</span>
        </ThemeButton>
      </SignUpForm>
      <LoginMessageContainer>
        Already have an account?
        <StyledLink to="/login"> Log in</StyledLink>
      </LoginMessageContainer>
    </Flex>
  );
};
