import * as React from 'react';
import Login from '../Login';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { AuthorizationContextProvider } from '../../../context/AuthorizationContext';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.post = jest.fn().mockResolvedValue({
    data: 'User not found',
});

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => (
    <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
            <AuthorizationContextProvider>
                {children}
            </AuthorizationContextProvider>
        </BrowserRouter>
    </ThemeProvider>
);

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

    it('should show error when inputs are empty', async () => {
        render(<Login />, { wrapper: Wrapper });
        const loginButton = screen.getByRole('button', { name: /log in/i });

        userEvent.click(loginButton);

        expect(
            await screen.findByText(
                /Please enter your username or email address./i,
            ),
        ).toBeVisible();

        expect(
            await screen.findByText(/Please enter your password./i),
        ).toBeVisible();
    });

    it('should redirect the user to the homepage', async () => {
        render(<Login />, { wrapper: Wrapper });

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        await userEvent.type(emailInput, 'email@mail.com');
        await userEvent.type(passwordInput, '12345678');

        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });

    // it('should show error when user is not found', async () => {
    //     render(<Login />, { wrapper: Wrapper });

    //     const emailInput = screen.getByRole('textbox', { name: /email/i });
    //     const passwordInput = screen.getByLabelText(/password/i);
    //     const loginButton = screen.getByRole('button', { name: /log in/i });

    //     await userEvent.type(emailInput, 'john@example.com');
    //     await userEvent.type(passwordInput, 'Password123');

    //     act(() => {
    //         fireEvent.click(loginButton);
    //     });

    //     screen.debug();
    // });
});
