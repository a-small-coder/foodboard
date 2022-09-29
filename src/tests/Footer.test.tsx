import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders react element', () => {
  render(<Footer />);
  const element = screen.getByText(/recipes/i);
  expect(element).toBeInTheDocument();
});
