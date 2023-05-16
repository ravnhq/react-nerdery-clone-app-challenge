import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../src/pages/Login/Login';
import { darkTheme } from '../../src/components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;

describe('Login page', () => {
    beforeEach(() => {
        render(<Login />, { wrapper: Wrapper });
    });

    it('should render properly', () => {
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

        expect(
            screen.getByRole('link', {
                name: /sign up for spotify/i,
            }),
        ).toBeInTheDocument();
    });

    it('should show error when inputs are empty', async () => {
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

    it('should show error when user is invalid', async () => {
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        await userEvent.type(emailInput, 'johny');
        await userEvent.type(passwordInput, '123456');

        userEvent.click(loginButton);

        screen.debug();
    });
});
