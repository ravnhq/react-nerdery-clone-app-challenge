import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaylistTrackSearch from '../PlaylistTrackSearch';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import * as useDebounceValue from '../../../hooks/useDebounceValue';

jest.mock('../../../hooks/useInfiniteScroll', () => ({
    ...jest.requireActual('../../../hooks/useInfiniteScroll'),
    useInfiniteScroll: jest.fn(),
}));

jest.mock('../../../hooks/useDebounceValue', () => ({
    ...jest.requireActual('../../../hooks/useDebounceValue'),
    useDebounceValue: jest.fn(),
}));

jest.spyOn(useDebounceValue, 'useDebounceValue').mockImplementation(() => '');

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
    );
};

describe('PlaylistTrackSearch', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });
    it('should render component correctly', async () => {
        (useInfiniteScroll as jest.Mock).mockImplementation(() => ({
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
            lastElementRef: null,
        }));

        render(<PlaylistTrackSearch action={() => {}} showSearch />, {
            wrapper: Wrapper,
        });

        expect(
            screen.getByRole('heading', {
                name: /let's find something for your playlist/i,
            }),
        ).toBeInTheDocument();

        expect(await screen.findAllByTestId(/track-card/i)).toHaveLength(3);
    });
});
