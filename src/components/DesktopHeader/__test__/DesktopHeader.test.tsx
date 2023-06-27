import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import DesktopHeader from '../DesktopHeader';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../Styles/themes/dark-theme';
import { useAuthorizationContext } from '../../../context/AuthorizationContext';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../../context/AuthorizationContext', () => ({
    ...jest.requireActual('../../../context/AuthorizationContext'),
    useAuthorizationContext: jest.fn(),
}));

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
    );
};

describe('DesktopHeader', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the DesktopHeader for an unauthenticated user', async () => {
        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            isAuth: false,
            user: null,
            basename: '/',
        }));

        render(<DesktopHeader />, { wrapper: Wrapper });

        const loginButton = screen.getByRole('link', {
            name: /log in/i,
        });
        const signUpButton = screen.getByRole('link', {
            name: /sign in/i,
        });

        expect(loginButton).toBeInTheDocument();
        expect(signUpButton).toBeInTheDocument();
    });

    it('should render the DesktopHeader for an authenticated user', async () => {
        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            isAuth: true,
            user: {
                email: 'email@mail.com',
                name: 'Jonathan Joestar',
                birth_date: '1988-12-02',
                gender: 'Male',
                id: 4,
            },
            basename: '/',
        }));

        render(<DesktopHeader />, { wrapper: Wrapper });

        const profileButton = screen.getByRole('button', {
            name: /jonathan joestar jonathan joestar/i,
        });

        expect(profileButton).toBeInTheDocument();
    });

    it('should render the DesktopHeader for an authenticated user and click on the profile button', async () => {
        const logout = jest.fn().mockReturnValue({});
        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            isAuth: true,
            user: {
                email: 'email@mail.com',
                name: 'Jonathan Joestar',
                birth_date: '1988-12-02',
                gender: 'Male',
                id: 4,
            },
            basename: '/',
            logout,
            login: jest.fn().mockReturnValue(Promise.resolve()),
            signup: jest.fn().mockReturnValue(Promise.resolve()),
        }));

        render(<DesktopHeader />, { wrapper: Wrapper });

        const profileButton = screen.getByRole('button', {
            name: /jonathan joestar jonathan joestar/i,
        });

        userEvent.click(profileButton);

        await waitFor(() => {
            const logoutButton = screen.getByText(/log out/i);

            expect(logoutButton).toBeInTheDocument();
        });
    });

    it('should should redirect user to login page when clicking on the login button', async () => {
        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            isAuth: false,
            user: null,
            basename: '/',
        }));

        render(<DesktopHeader />, { wrapper: Wrapper });

        const loginButton = screen.getByRole('link', {
            name: /log in/i,
        });

        userEvent.click(loginButton);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/login');
        });
    });

    it('should should redirect user to signup page when clicking on the signup button', async () => {
        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            isAuth: false,
            user: null,
            basename: '/',
        }));

        render(<DesktopHeader />, { wrapper: Wrapper });

        const signUpButton = screen.getByRole('link', {
            name: /sign in/i,
        });

        userEvent.click(signUpButton);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/signup');
        });
    });

    it('should render children', () => {
        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            isAuth: false,
            user: null,
            basename: '/',
        }));

        render(
            <DesktopHeader>
                <div>children</div>
            </DesktopHeader>,
            { wrapper: Wrapper },
        );

        const children = screen.getByText(/children/i);

        expect(children).toBeInTheDocument();
    });
});
