// Add test to App
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/count is 0/i);
    expect(linkElement).toBeInTheDocument();
  });
});
