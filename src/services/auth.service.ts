import { mockedApiInstance } from './index';

interface LoginVM {
    email: string;
    password: string;
}

interface SignUpUser extends User {
    password: string;
}

interface LoginResponse {
    access_token: string;
    user: User;
}

export const login = async (user: LoginVM): Promise<LoginResponse> => {
    return mockedApiInstance.post('/login', user);
};

export const register = async (user: SignUpUser): Promise<User> => {
    return mockedApiInstance.post('/register', user);
};
