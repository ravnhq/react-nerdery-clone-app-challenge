import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaylistTracklist from '../PlaylistTracklist';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { useAsync } from '../../../hooks/useAsync';

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

describe('PlaylistTracklist', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should render component correctly', async () => {
        (useAsync as jest.Mock).mockImplementationOnce(() => ({
            loading: false,
            data: [
                {
                    playlistId: 4,
                    id: '4LRPiXqCikLlN15c3yImP71281',
                    name: 'As It Was',
                    artist: 'Harry Styles',
                    album: {
                        name: 'As It Was',
                        image: 'https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14',
                    },
                    duration_ms: 167303,
                    liked: true,
                },
                {
                    playlistId: 4,
                    id: '2ixkIrn45mNfdLDLHuyfRt3864',
                    name: '23',
                    artist: 'Chayce Beckham',
                    album: {
                        name: '23',
                        image: 'https://i.scdn.co/image/ab67616d0000b2735de6bc066ec7ab42359bde57',
                    },
                    duration_ms: 228144,
                    liked: false,
                },
                {
                    playlistId: 4,
                    id: '4PuAqZlL1tkidkuxfDlLbF3537',
                    name: '23',
                    artist: 'Sam Hunt',
                    album: {
                        name: '23',
                        image: 'https://i.scdn.co/image/ab67616d0000b273cf59a62f06c6020a8ed9180b',
                    },
                    duration_ms: 179720,
                    liked: false,
                },
            ],
            callback: jest.fn(),
        }));

        render(<PlaylistTracklist playlistId={2} />, {
            wrapper: Wrapper,
        });

        expect(await screen.findAllByTestId(/track-card/i)).toHaveLength(3);
    });
});
