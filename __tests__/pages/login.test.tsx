import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../src/pages/Login/Login';
import { darkTheme } from '../../src/components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;

beforeEach(() => {
    render(<Login />, { wrapper: Wrapper });
});

it('should render login page properly', async () => {
    const heading = screen.getByRole('heading', {
        name: /log in to spotify/i,
    });

    expect(heading).toBeInTheDocument();
});
