import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { login as loginAPI, register } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

interface context {
    isAuth: boolean;
    login: (data: { email: string; password: string }) => void;
    logout: () => void;
    signup: (data: SignUpUser) => void;
    user: User | null;
    error: string | undefined;
    loading: boolean;
}

interface SignUpUser extends User {
    password: string;
}

const authContextDefaults: context = {
    isAuth: false,
    login: () => {},
    logout: () => {},
    signup: () => {},
    user: null,
    error: undefined,
    loading: false,
};

const AuthorizationContext = createContext<context>(authContextDefaults);

export const AuthorizationContextProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    const login = async (data: { email: string; password: string }) => {
        await loginAPI(data)
            .then((res) => {
                setUser(res.user);
                localStorage.setItem('access_token', res.accessToken);
                setIsAuth(true);
                navigate('/');
            })
            .catch((err) => {
                setError(err.response.data);
            })
            .finally(() => setLoading(false));
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        localStorage.removeItem('access_token');
    };

    const signup = async (data: SignUpUser) => {
        await register(data)
            .then((res) => {
                setUser(res.user);
                localStorage.setItem('access_token', res.accessToken);
                setIsAuth(true);
                navigate('/');
            })
            .catch((err) => {
                setError(err.response.data);
            })
            .finally(() => setLoading(false));
    };

    const value = {
        isAuth,
        login,
        logout,
        user,
        signup,
        error,
        loading,
    };

    return (
        <AuthorizationContext.Provider value={value}>
            {children}
        </AuthorizationContext.Provider>
    );
};

export function useAuthorizationContext() {
    return useContext(AuthorizationContext);
}
