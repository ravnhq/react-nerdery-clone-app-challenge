import { FC } from "react";
import { useUserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  SignupButton,
  SignupFormLayout,
  SignupH1,
  SignupInput,
} from "../styles";
import { FormError, SignupVerificationSpan } from "./styles";
import { useForm } from "react-hook-form";
import { Alert } from "../../../assets";

interface Signup {
  user: { email: string; password: string; wishlists: string[] };
}
interface Password {
  password: string;
}
export const Signup: FC<Signup> = ({ user }) => {
  const { register } = useUserContext();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<Password>();
  const navigate = useNavigate();
  const handleSignup = async (data: Password, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    try {
      register({ ...user, password: data.password });
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div data-testid="signup">
      <SignupH1>Continue Signup</SignupH1>

      <SignupFormLayout onSubmit={handleSubmit(handleSignup)}>
        <SignupInput>
          <input
            data-testid="passwordInput"
            id="password"
            type="password"
            {...registerForm("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password needs to have at least 8 characters, a number and a letter",
              },
            })}
          />
          <label htmlFor="password">Password</label>
        </SignupInput>
        {errors.password && (
          <FormError data-testid="error">
            <Alert /> {errors.password.message}
          </FormError>
        )}
        <SignupButton data-testid="agreeButton">
          Agree and Continue
        </SignupButton>
        <SignupVerificationSpan>
          By selecting Agree and continue, I agree to Airbnb's
          <a href="">Terms of Service, Payments Terms of Service</a>, and
          Nondiscrimination Policy and acknowledge the
          <a href="">Privacy Policy</a> .
        </SignupVerificationSpan>
      </SignupFormLayout>
    </div>
  );
};
