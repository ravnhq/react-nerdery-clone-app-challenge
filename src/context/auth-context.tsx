import axios, { AxiosError } from 'axios';
import { PropsWithChildren, createContext, useState } from 'react';
import { NullableUserWithToken, UserWithToken } from '../shared/types/user';

type AuthDispatch = (arg: NullableUserWithToken) => void;

type AuthValueDispatch = [NullableUserWithToken, AuthDispatch];

export const AuthContext = createContext<AuthValueDispatch | null>(null);

const configInterceptors = (auth: NullableUserWithToken) => {
  axios.interceptors.response.clear();
  if (auth) {
    axios.interceptors.request.use(request => {
      request.headers.Authorization = `Bearer ${auth.accessToken}`;
      return request;
    });
  } else axios.interceptors.request.clear();

  axios.interceptors.response.use(
    response => response,
    error => {
      const axiosError = error as AxiosError;
      return Promise.reject(
        Error(String(axiosError?.response?.data ?? 'Unknown error')),
      );
    },
  );
};

export const AuthProvider = (props: PropsWithChildren) => {
  const [auth, setAuth] = useState<NullableUserWithToken>(
    JSON.parse(localStorage.getItem('auth') ?? 'null') as UserWithToken,
  );
  configInterceptors(auth);

  const storageSyncedDispatch: AuthDispatch = arg => {
    configInterceptors(arg);
    setAuth(arg);
    localStorage.setItem('auth', JSON.stringify(arg));
  };

  return (
    <AuthContext.Provider value={[auth, storageSyncedDispatch]} {...props} />
  );
};
