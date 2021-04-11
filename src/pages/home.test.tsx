import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './home';

test('renders learn react link', () => {
  render(<HomePage />);
  const welcomeElem = screen.getByText(/Welcome To my React BoilerPlate!!!/i);
  expect(welcomeElem).toBeInTheDocument();
});
