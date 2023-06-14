import {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { login as loginAPI, register } from '../services/auth.service';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

interface context {
    isAuth: boolean;
    login: (data: { email: string; password: string }) => void;
    logout: () => void;
    signup: (data: UserCreate) => void;
    user: User | null;
    error: string | undefined;
    loading: boolean;
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

export const AuthorizationContext = createContext<context>(authContextDefaults);

export const AuthorizationContextProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const user = localStorage.getItem('user');
        if (token && user) {
            setUser(JSON.parse(user));
            setIsAuth(true);
        }
    }, []);

    const login = async (data: { email: string; password: string }) => {
        setLoading(true);
        loginAPI(data)
            .then((res) => {
                setUser(res.user);
                localStorage.setItem('access_token', res.accessToken);
                localStorage.setItem('user', JSON.stringify(res.user));
                setIsAuth(true);
                navigate('/');
            })
            .catch((err: AxiosError) => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        navigate('/');
    };

    const signup = async (data: UserCreate) => {
        register(data)
            .then((res) => {
                setUser(res.user);
                localStorage.setItem('access_token', res.accessToken);
                localStorage.setItem('user', JSON.stringify(res.user));
                setIsAuth(true);
                navigate('/?new');
            })
            .catch((err: AxiosError) => {
                setError(err.message);
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
