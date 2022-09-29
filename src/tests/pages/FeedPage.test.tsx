import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedPage from '../../pages/FeedPage';

test('renders react element', () => {
  render(<FeedPage />);
  const element = screen.getByText(/feed/i);
  expect(element).toBeInTheDocument();
});
