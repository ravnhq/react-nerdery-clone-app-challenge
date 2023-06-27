import * as React from 'react';
import Login from '../LoginForm';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { darkTheme } from '../../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

describe('Login Form', () => {
    it('should render the login page', () => {
        render(<Login onSubmit={() => {}} />, { wrapper: Wrapper });

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
        render(<Login onSubmit={() => {}} />, { wrapper: Wrapper });
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

    it('should submit data properly', async () => {
        const mockLogin = jest.fn();
        render(<Login onSubmit={mockLogin} />, { wrapper: Wrapper });

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        await userEvent.type(emailInput, 'email@mail.com');
        await userEvent.type(passwordInput, '12345678');

        await userEvent.click(loginButton);

        expect(mockLogin).toHaveBeenCalledTimes(1);
    });

    it('should show error when login fails', async () => {
        const mockLogin = jest.fn().mockRejectedValueOnce('Login failed');
        render(<Login onSubmit={mockLogin} error="Login Failed" />, {
            wrapper: Wrapper,
        });

        expect(screen.getByTestId('error-banner')).toBeInTheDocument();
    });
});
