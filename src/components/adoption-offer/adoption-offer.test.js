import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AdoptionOfferComponent from './adoption-offer';

test('renders form with correct initial values', () => {
  render(<AdoptionOfferComponent pet={{/* mock pet data */}} />);
  
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Adoption terms/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();

  expect(screen.getByLabelText(/Name/i)).toHaveValue('');
  expect(screen.getByLabelText(/Phone/i)).toHaveValue('');
  expect(screen.getByLabelText(/Email/i)).toHaveValue('');
  expect(screen.getByLabelText(/Adoption terms/i)).toHaveValue('');
});

test('updates state when form inputs change', () => {
  render(<AdoptionOfferComponent pet={{/* mock pet data */}} />);
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '123-456-7890' } });

  expect(screen.getByLabelText(/Name/i)).toHaveValue('John');
  expect(screen.getByLabelText(/Phone/i)).toHaveValue('123-456-7890');
});
