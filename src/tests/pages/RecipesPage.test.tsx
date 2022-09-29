import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipesPage from '../../pages/RecipesPage';

test('renders react element', () => {
  render(<RecipesPage />);
  const element = screen.getByText(/recipes/i);
  expect(element).toBeInTheDocument();
});