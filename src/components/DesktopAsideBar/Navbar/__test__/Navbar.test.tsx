import * as React from 'react';
import Navbar from '../Navbar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
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

describe('Navbar', () => {
    beforeEach(() => {
        (useLocation as jest.Mock).mockImplementation(() => ({
            pathname: '/',
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render the Navbar', () => {
        render(<Navbar />, { wrapper: Wrapper });

        const homeLink = screen.getByText('Home');

        expect(homeLink).toBeInTheDocument();
        expect(screen.getByText('Search')).toBeInTheDocument();
    });
});
