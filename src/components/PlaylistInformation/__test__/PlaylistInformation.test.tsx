import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PlaylistInformation from '../PlaylistInformation';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useAuthorizationContext } from '../../../context/AuthorizationContext';
import { useAsync } from '../../../hooks/useAsync';
import * as SpotifyService from '../../../services/spotify.service';
import axios from 'axios';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
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

describe('PlaylistInformation', () => {
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

    it('should render the Playlist Information', async () => {
        (useAsync as jest.Mock).mockImplementation(() => ({
            loading: false,
            data: {
                name: 'Playlist 2 usuario 2',
                description: '',
                userId: 2,
                id: 2,
            },
            callback: jest.fn(),
            error: null,
        }));

        render(<PlaylistInformation playlistId={2} />, {
            wrapper: Wrapper,
        });

        screen.getByRole('heading', { name: /Playlist 2 usuario 2/i });

        const buttons = await screen.findAllByRole('button');

        expect(buttons).toHaveLength(2);
    });
});
