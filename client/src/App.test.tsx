import React from 'react';
import { render, screen } from '@testing-library/react';
import Admin from './components/admin';

test('renders learn react link', () => {
  render(<Admin />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
