import React from 'react';
import { render } from './testUtils';
import App from './App';

// Since each component already has its own test, we just mock them here
jest.mock('./demo/pages/Home', () => () => <div data-testid="HomeComponent" />);

describe('Component: App', () => {
  it('should render main', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('should render Home route', () => {
    const { getByTestId } = render(<App />, { route: '/' });
    expect(getByTestId('HomeComponent')).toBeInTheDocument();
  });
});
