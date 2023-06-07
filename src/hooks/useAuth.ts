import { useContext, useMemo } from 'react';
import { AuthContext } from '../context/auth-context';
import { SignupInputs } from '../shared/types/signup-inputs';
import { LoginInputs } from '../shared/types/auth-inputs';
import {
  login as loginRequest,
  register as registerRequest,
} from '../services/http-spotify-api';

export const useAuth = () => {
  const authConsumer = useContext(AuthContext);
  if (!authConsumer) throw Error('useAuth must be inside AuthProvider');
  const [auth, setAuth] = authConsumer;
  const isLogged = useMemo(() => !!auth, [auth]);

  const login = (payload: LoginInputs) => {
    return loginRequest(payload).then(authResponse => {
      setAuth(authResponse);
    });
  };

  const logout = () => {
    setAuth(null);
  };

  const register = (payload: SignupInputs) => {
    return registerRequest(payload).then(authResponse => setAuth(authResponse));
  };

  return { isLogged, login, logout, register, auth };
};
