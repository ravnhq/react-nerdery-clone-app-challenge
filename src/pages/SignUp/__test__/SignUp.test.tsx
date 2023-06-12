import * as React from 'react';
import SignUp from '../SignUp';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
    renderHook,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { darkTheme } from '../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { AuthorizationContextProvider } from '../../../context/AuthorizationContext';
import { BrowserRouter } from 'react-router-dom';
import { faker } from '@faker-js/faker';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => (
    <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
            <AuthorizationContextProvider>
                {children}
            </AuthorizationContextProvider>
        </BrowserRouter>
    </ThemeProvider>
);

describe('SignUp Page', () => {
    it('should render the sign up page', () => {
        render(<SignUp />, { wrapper: Wrapper });

        const radioButtons = screen.getAllByRole('radio');
        const checkBoxes = screen.getAllByRole('checkbox');

        expect(
            screen.getByRole('heading', {
                name: /sign up with your email address/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('textbox', {
                name: /what's your email\?/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByLabelText(/create a password/i)).toBeInTheDocument();

        expect(
            screen.getByRole('textbox', {
                name: /what should we call you\?/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('textbox', {
                name: /day/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('combobox', {
                name: /month/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('textbox', {
                name: /year/i,
            }),
        ).toBeInTheDocument();

        expect(radioButtons).toHaveLength(5);

        expect(checkBoxes).toHaveLength(2);

        expect(
            screen.getByRole('button', {
                name: /sign up/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/have an account\?/i)).toBeInTheDocument();
    });
});
