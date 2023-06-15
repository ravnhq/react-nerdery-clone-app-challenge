import axios from "axios";
import { FC } from "react";
import { ENDPOINT, USERS } from "../../shared/API";
import { SignupInput, SignupButton, SignupFormLayout } from "../styles";
import { useForm } from "react-hook-form";
import { Alert } from "../../../assets";
import { FormError } from "../signup/styles";

interface Email {
  handleSwitchType: (type: string) => void;
  handleUser: (name: string, data: string) => void;
}

interface email {
  email: string;
}

export const Email: FC<Email> = ({ handleSwitchType, handleUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<email>();

  const handleContinue = async (data: email, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    const email = data.email;
    handleUser("email", email);
    try {
      const response = await axios.get<[]>(
        `${ENDPOINT}${USERS}?email=${email}`
      );
      const data = response.data;
      if (data.length !== 0) {
        handleSwitchType("login");
      } else {
        handleSwitchType("register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignupFormLayout
      data-testid="email"
      onSubmit={handleSubmit(handleContinue)}
    >
      <SignupInput>
        <input
          id="email"
          data-testid="emailInput"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter a valid email",
            },
          })}
        />
        <label htmlFor="email">Email</label>
      </SignupInput>
      {errors.email && (
        <FormError data-testid="error">
          <Alert /> {errors.email.message}
        </FormError>
      )}
      <SignupButton data-testid="continueButton">Continue</SignupButton>
    </SignupFormLayout>
  );
};
