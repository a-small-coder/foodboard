import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsPage from '../../pages/ProductsPage';

test('renders react element', () => {
  render(<ProductsPage />);
  const element = screen.getByText(/products/i);
  expect(element).toBeInTheDocument();
});