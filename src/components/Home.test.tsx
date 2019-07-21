import React from 'react';
import { render } from '../testHelpers';
import Home from './Home';

describe('Component: Home', () => {
  it('should render "Welcome to React" by default', () => {
    const { container } = render(<Home />);
    expect(container).toHaveTextContent('Welcome to React');
  });

  it('should render given title', () => {
    const { container } = render(<Home title="Hello World" />);
    expect(container).toHaveTextContent('Hello World');
  });
});
