import React from 'react';
import { render } from '../testUtils';
import App from './App';

describe('Component: App', () => {
  it('should render main', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('should render Home route', () => {
    const { container } = render(<App />, { route: '/' });
    expect(container).toHaveTextContent('Welcome to React');
  });

  it('should render Test route', () => {
    const { container } = render(<App />, { route: '/test' });
    expect(container).toHaveTextContent('Test Page');
  });
});
