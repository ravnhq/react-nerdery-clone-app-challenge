type AuthContext = {
    user: User | null;
    login: (user: UserLogin) => void;
    logout: () => void;
};
