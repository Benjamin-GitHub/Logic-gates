import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the simulator and all draggable gate choices', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Logic Gate Simulator' })).toBeInTheDocument();
  for (const name of ['AND Gate', 'OR Gate', 'NOT Gate']) {
    expect(screen.getByText(name, { exact: false })).toHaveAttribute('draggable', 'true');
  }
});
