import * as React from 'react';
import Login from '../Login';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
    );
};

describe('Login Page', () => {
    it('should render the login page', () => {
        render(<Login />, { wrapper: Wrapper });

        expect(
            screen.getByRole('heading', {
                name: /log in to spotify/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('textbox', { name: /email/i }),
        ).toBeInTheDocument();

        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', { name: /log in/i }),
        ).toBeInTheDocument();

        expect(screen.getByTestId('remember-me-switch')).toBeInTheDocument();

        expect(
            screen.getByRole('link', {
                name: /sign up for spotify/i,
            }),
        ).toBeInTheDocument();
    });

    it('should call api on button click', async () => {
        const mockLogin = jest.spyOn(axios, 'post');

        render(<Login />, { wrapper: Wrapper });

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        await userEvent.type(emailInput, 'email@mail.com');
        await userEvent.type(passwordInput, '12345678');

        act(() => {
            fireEvent.click(loginButton);
        });

        waitFor(() => {
            expect(mockLogin).toHaveBeenCalled();
        });
    });
});
