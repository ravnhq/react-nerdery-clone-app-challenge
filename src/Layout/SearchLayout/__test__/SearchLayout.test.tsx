import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchLayout from '../SearchLayout';
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

describe('SearchLayout', () => {
    it('should render the SearchLayout children', () => {
        render(
            <SearchLayout>
                <div>Page content</div>
            </SearchLayout>,
            {
                wrapper: Wrapper,
            },
        );

        expect(screen.getByText(/Page content/i)).toBeInTheDocument();
    });
});
