import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders react element', () => {
  render(<App />);
  const element = screen.getByText(/Главная/i);
  expect(element).toBeInTheDocument();
});
