import React from 'react';
import { render } from '../testHelpers';
import NotFound from './NotFound';

describe('Component: NotFound', () => {
  it('should render "404"', () => {
    const { container } = render(<NotFound />);
    expect(container).toHaveTextContent('404');
  });
});
