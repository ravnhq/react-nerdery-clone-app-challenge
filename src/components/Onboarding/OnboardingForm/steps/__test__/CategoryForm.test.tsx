import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CategoryForm from '../CategoryForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { darkTheme } from '../../.../../../../Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useAsync } from '../../../../../hooks/useAsync';

jest.mock('../../../../../hooks/useAsync', () => ({
    ...jest.requireActual('../../../../../hooks/useAsync'),
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

describe('Category Form', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render component', async () => {
        (useAsync as jest.Mock).mockImplementationOnce(async () => ({
            loading: false,
            data: [
                {
                    id: 'toplists',
                    name: 'Top Lists',
                    image: 'https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg',
                },
                {
                    id: '0JQ5DAqbMKFxXaXKP7zcDp',
                    name: 'Latin',
                    image: 'https://t.scdn.co/images/26a60378-a374-4cd7-b894-28efa5e154cb.jpg',
                },
                {
                    id: '0JQ5DAqbMKFEC4WFtoNRpw',
                    name: 'Pop',
                    image: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
                },
            ],
            callback: jest.fn(),
        }));

        render(<CategoryForm categories={[]} updateField={() => {}} />, {
            wrapper: Wrapper,
        });

        // expect(await screen.findAllByTestId('category-card')).toHaveLength(3);

        screen.debug();
    });
});
