import { StyledHeader } from '../../components/Styles/Login/Header.styles';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import { LoginForm } from '../../components/Forms/LoginForm';

type FormValues = {
    email: string;
    password: string;
    remember_me: boolean;
};

const Login = () => {
    const { login, error } = useAuthorizationContext();

    const onSubmit = (data: FormValues) => {
        const loginData = {
            email: data.email,
            password: data.password,
        };

        login(loginData);
    };

    return (
        <>
            <StyledHeader>
                <img src="/svg/logo-extended.svg" alt="" />
            </StyledHeader>
            <LoginForm onSubmit={onSubmit} error={error} />
        </>
    );
};

export default Login;
