// Add test to App
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { createMemoryHistory } from 'history';
import { SearchInput } from '.';
import { PropsWithChildren, ReactElement } from 'react';
import { Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

function renderWithRouter(
  ui: ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Router location={history.location} navigator={history}>
      {children}
    </Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
}

describe('SearchInput', () => {
  test('text-inputs changes navigation', async () => {
    const rendered = renderWithRouter(<SearchInput />);

    const searchedText = 'test';
    const textInput = rendered.getByTestId('text-input');

    expect(textInput).toBeInTheDocument();

    await userEvent.type(textInput, searchedText);

    expect(textInput).toHaveValue(searchedText);
  });
});
