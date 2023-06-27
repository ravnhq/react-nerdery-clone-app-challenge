import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchBar from '../SearchBar';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import { darkTheme } from '../../Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <MemoryRouter initialEntries={['?q=asd&type=album']}>
                {children}
            </MemoryRouter>
        </ThemeProvider>
    );
};

describe('SearchBar', () => {
    it('should render the SearchBar', () => {
        render(<SearchBar />, {
            wrapper: Wrapper,
        });

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText(/albums/i)).toBeInTheDocument();
        expect(screen.getByText(/songs/i)).toBeInTheDocument();
        expect(screen.getByText(/artists/i)).toBeInTheDocument();
        expect(screen.getByText(/playlists/i)).toBeInTheDocument();
    });

    it('should render the SearchBar with the correct search type selected', async () => {
        render(<SearchBar />, {
            wrapper: Wrapper,
        });

        expect(screen.getByText(/albums/i)).toHaveStyle({
            backgroundColor: 'white',
        });

        await userEvent.click(screen.getByText(/songs/i));

        waitFor(() => {
            expect(screen.getByText(/songs/i)).toHaveStyle({
                backgroundColor: 'white',
            });
        });

        await userEvent.click(screen.getByText(/artists/i));

        waitFor(() => {
            expect(screen.getByText(/artists/i)).toHaveStyle({
                backgroundColor: 'white',
            });
        });

        await userEvent.click(screen.getByText(/playlists/i));

        waitFor(() => {
            expect(screen.getByText(/playlists/i)).toHaveStyle({
                backgroundColor: 'white',
            });
        });

        await userEvent.type(screen.getByRole('textbox'), 'test');

        waitFor(() => {
            expect(screen.getByRole('textbox')).toHaveValue('test');
        });
    });
});
