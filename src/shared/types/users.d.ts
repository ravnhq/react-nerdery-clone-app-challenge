type User = {
    id?: number;
    email: string;
    name: string;
    birth_date: string;
    gender: string;
};

type UserLogin = Omit<User, 'name'>;
