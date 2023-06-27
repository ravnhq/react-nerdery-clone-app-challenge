import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBOundary';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../components/Styles/themes/dark-theme';
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

describe('ErrorBoundary', () => {
    it('should render children if no error if catch', () => {
        render(
            <ErrorBoundary>
                <div>Children</div>
            </ErrorBoundary>,
            {
                wrapper: Wrapper,
            },
        );

        expect(screen.getByText(/Children/i)).toBeInTheDocument();
    });

    it('should render NotFound component if error is catch', () => {
        const ChildComponent = () => {
            throw new Error('Test error');
        };

        render(
            <ErrorBoundary>
                <ChildComponent />
            </ErrorBoundary>,
            {
                wrapper: Wrapper,
            },
        );

        expect(screen.getByText(/Page not available/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Something went wrong, please try again later./i),
        ).toBeInTheDocument();
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
});
