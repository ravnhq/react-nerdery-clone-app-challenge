// Add test to App
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import App from './App';

describe('App', () => {
  test('renders layout components', () => {
    render(<App />);
    const sidebar = screen.getByTestId('sidebar-element');
    const header = screen.getByTestId('header-element');
    const mainview = screen.getByTestId('mainview-element');

    expect(mainview).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
