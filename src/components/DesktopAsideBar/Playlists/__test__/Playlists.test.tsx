import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Playlists from '../Playlists';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useAuthorizationContext } from '../../../../context/AuthorizationContext';
import { useAsync } from '../../../../hooks/useAsync';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

jest.mock('../../../../context/AuthorizationContext', () => ({
    ...jest.requireActual('../../../../context/AuthorizationContext'),
    useAuthorizationContext: jest.fn(),
}));

jest.mock('../../../../hooks/useAsync', () => ({
    ...jest.requireActual('../../../../hooks/useAsync'),
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

describe('Playlists', () => {
    beforeEach(() => {
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

    it('should render the User Playlists', async () => {
        (useAsync as jest.Mock).mockImplementationOnce(() => ({
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
        }));

        render(<Playlists />, { wrapper: Wrapper });

        expect(screen.getByText(/your library/i)).toBeInTheDocument();

        const playlists = await screen.findAllByText(
            /^Playlist \d+ usuario 2$/,
        );

        expect(playlists).toHaveLength(2);
    });

    it('should redirect to /liked when the user clicks on the liked songs link', async () => {
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
        }));

        render(<Playlists />, { wrapper: Wrapper });

        const likedSongsLink = await screen.findByText(/liked songs/i);

        expect(likedSongsLink).toBeInTheDocument();

        await userEvent.click(likedSongsLink);

        waitFor(() => {
            expect(useNavigate).toHaveBeenCalledWith('/liked');
        });
    });

    it('should redirect to /playlist/:id when the user clicks on playlist link', async () => {
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
        }));

        render(<Playlists />, { wrapper: Wrapper });

        const playlistLink = await screen.findByText(/Playlist 2 usuario 2/i);

        expect(playlistLink).toBeInTheDocument();

        await userEvent.click(playlistLink);

        waitFor(() => {
            expect(useNavigate).toHaveBeenCalledWith('/playlist/2');
        });
    });
});
