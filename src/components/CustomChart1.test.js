import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomChart1 from './CustomChart1';

test('renders CustomChart1 correctly', () => {
  render(<CustomChart1 />);
  const chart = screen.getByRole('img');
  expect(chart).toBeInTheDocument();
});
