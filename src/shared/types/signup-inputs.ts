export interface SignupInputs {
  email: string;
  password: string;
  username: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };
  gender: string;
}
