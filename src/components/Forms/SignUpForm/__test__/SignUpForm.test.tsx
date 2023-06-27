import * as React from 'react';
import SignUp from '../SignUpForm';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { darkTheme } from '../../../../components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { faker } from '@faker-js/faker';
import userEvent from '@testing-library/user-event';

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

describe('SignUp Form ', () => {
    it('should render the sign up page', () => {
        render(<SignUp onSubmit={() => {}} />, { wrapper: Wrapper });

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

    it('should show error when inputs are empty', async () => {
        render(<SignUp onSubmit={() => {}} />, { wrapper: Wrapper });

        const signUpButton = screen.getByRole('button', { name: /sign up/i });

        act(() => {
            fireEvent.click(signUpButton);
        });

        expect(await screen.findAllByTestId('error-message')).toHaveLength(7);
    });

    it('should fill the form properly', async () => {
        const userData = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            profile_name: faker.internet.displayName(),
            day: faker.number.int({ min: 1, max: 28 }).toString(),
            month: '01',
            year: faker.number.int({ min: 1900, max: 2021 }).toString(),
            gender: 'Male',
        };

        const onSubmitMock = jest.fn();

        render(<SignUp onSubmit={onSubmitMock} />, { wrapper: Wrapper });

        const emailInput = screen.getByRole('textbox', {
            name: /what's your email\?/i,
        });

        const passwordInput = screen.getByLabelText(/create a password/i);

        const nameInput = screen.getByRole('textbox', {
            name: /what should we call you\?/i,
        });

        const dayInput = screen.getByRole('textbox', {
            name: /day/i,
        });

        const monthInput = screen.getByRole('combobox', {
            name: /month/i,
        });

        const yearInput = screen.getByRole('textbox', {
            name: /year/i,
        });

        const signUpButton = screen.getByRole('button', { name: /sign up/i });

        const [singleRadioButton] = screen.getAllByRole('radio');

        await userEvent.type(emailInput, userData.email);
        await userEvent.type(passwordInput, userData.password);

        await userEvent.type(nameInput, userData.profile_name);

        await userEvent.type(dayInput, userData.day);

        await userEvent.selectOptions(monthInput, 'January');

        await userEvent.type(yearInput, userData.year);

        await userEvent.click(singleRadioButton);

        expect(singleRadioButton).toBeChecked();

        await userEvent.click(signUpButton);

        expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
});
