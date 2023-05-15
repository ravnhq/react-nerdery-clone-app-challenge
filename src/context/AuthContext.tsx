import { PropsWithChildren, createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import users from '../shared/db/user.json';

const authContextDefaults: AuthContext = {
    user: null,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<AuthContext>(authContextDefaults);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const [storedUser, setStoredUser] = useLocalStorage<User | null>(
        'user',
        null,
    );
    const login = ({ email, password }: UserLogin) => {
        const user = users.find(
            (user) => user.email === email && user.password === password,
        );
        if (!user) {
            throw new Error('Incorrect username or password.');
        }

        setStoredUser(user);
    };

    const logout = () => {
        setStoredUser(null);
    };

    const value = {
        user: storedUser,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export function useAuthContext() {
    return useContext(AuthContext);
}
