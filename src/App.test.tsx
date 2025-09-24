import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders question input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Faça sua pergunta.../i);
  expect(inputElement).toBeInTheDocument();
});
