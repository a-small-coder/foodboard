import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from '../../pages/ProfilePage';

test('renders react element', () => {
  render(<ProfilePage />);
  const element = screen.getByText(/profile/i);
  expect(element).toBeInTheDocument();
});