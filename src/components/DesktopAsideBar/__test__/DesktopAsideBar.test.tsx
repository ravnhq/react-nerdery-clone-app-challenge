import React from 'react';
import { render, screen } from '@testing-library/react';
import DesktopAsideBar from '../DesktopAsideBar';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { useAuthorizationContext } from '../../../context/AuthorizationContext';
import { useAsync } from '../../../hooks/useAsync';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
    useLocation: jest.fn(),
}));

jest.mock('../../../context/AuthorizationContext', () => ({
    ...jest.requireActual('../../../context/AuthorizationContext'),
    useAuthorizationContext: jest.fn(),
}));

jest.mock('../../../hooks/useAsync', () => ({
    ...jest.requireActual('../../../hooks/useAsync'),
    useAsync: jest.fn(),
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

describe('DesktopAsideBar', () => {
    beforeEach(() => {
        (useLocation as jest.Mock).mockImplementation(() => ({
            pathname: '/',
        }));

        (useNavigate as jest.Mock).mockImplementation(() => ({
            pathname: '/',
        }));

        (useAuthorizationContext as jest.Mock).mockImplementation(() => ({
            user: {
                email: 'email@mail.com',
                name: 'Jonathan Joestar',
                birth_date: '1988-12-02',
                gender: 'Male',
                id: 2,
            },
            isAuth: true,
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the Navbar links', () => {
        (useAsync as jest.Mock).mockImplementation(() => ({
            loading: false,
            data: [
                {
                    name: 'Playlist 2 usuario 2',
                    description: '',
                    userId: 2,
                    id: 2,
                },
                {
                    name: 'Playlist 3 usuario 2',
                    description: '',
                    userId: 2,
                    id: 3,
                },
            ],
            callback: jest.fn(),
            error: null,
        }));
        render(<DesktopAsideBar />, { wrapper: Wrapper });

        const homeLink = screen.getByText('Home');

        expect(homeLink).toBeInTheDocument();
        expect(screen.getByText('Search')).toBeInTheDocument();
    });

    it('should render library', async () => {
        (useAsync as jest.Mock).mockImplementation(() => ({
            loading: false,
            data: [
                {
                    name: 'Playlist 2 usuario 2',
                    description: '',
                    userId: 2,
                    id: 2,
                },
                {
                    name: 'Playlist 3 usuario 2',
                    description: '',
                    userId: 2,
                    id: 3,
                },
            ],
            callback: jest.fn(),
            error: null,
        }));

        render(<DesktopAsideBar />, { wrapper: Wrapper });

        expect(screen.getByText(/your library/i)).toBeInTheDocument();

        const playlists = await screen.findAllByText(
            /^Playlist \d+ usuario 2$/,
        );

        expect(playlists).toHaveLength(2);
    });
});
