import { mockedApiInstance } from './index';

export interface LoginVM {
    email: string;
    password: string;
}

interface SignUpUser extends User {
    password: string;
}

interface AuthResponse {
    accessToken: string;
    user: User;
}

export const login = async (user: LoginVM): Promise<AuthResponse> => {
    return mockedApiInstance.post('/login', user);
};

export const register = async (user: SignUpUser): Promise<AuthResponse> => {
    return mockedApiInstance.post('/register', user);
};
