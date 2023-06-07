export const isNeeded =
  <T>(message?: string) =>
  (v: T) =>
    !!v || (message ?? 'This field is required');

export const emailFormOptions = {
  validate: {
    required: isNeeded(),
  },
  pattern: {
    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email address. e.g. example@email.com',
  },
};

export const passwordFormOptions = {
  validate: {
    required: isNeeded(),
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:
      'Password needs to have at least 8 characters, a number and a letter',
  },
};
