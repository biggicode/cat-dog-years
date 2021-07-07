import { render, screen } from '@testing-library/react';
import App from './App';

describe("Render app",() => {
  test('renders app form', () => {
    render(<App />);
    const linkElement = screen.getByText(/This app transforms human years in cat and dog years/i);
    expect(linkElement).toBeInTheDocument();
  });

})
