import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterMenuItem from '../components/FooterMenu/FooterMenuItem';
import user from '../assets/icons/UserIcon.png'

test('renders react element', () => {
  render(<FooterMenuItem icon={user} title="test"/>);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
