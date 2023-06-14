export interface User {
  id: number;
  username: string;
  email: string;
}

export interface UserWithToken {
  accessToken: string;
  user: User;
}

export type NullableUserWithToken = UserWithToken | null;
