import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
    );
};

describe('NotFound', () => {
    it('should render the NotFound component', () => {
        render(<NotFound />, {
            wrapper: Wrapper,
        });

        expect(screen.getByText(/Page not available/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Something went wrong, please try again later./i),
        ).toBeInTheDocument();
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });

    it('should redirect to home page when clicking on the home button', () => {
        render(<NotFound />, {
            wrapper: Wrapper,
        });

        expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
            'href',
            '/',
        );
    });
});
