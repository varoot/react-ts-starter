import React from 'react';
import { render } from '../../testUtils';
import ReactLogo from './ReactLogo';

describe('Component: ReactLogo', () => {
  it('should render an image', () => {
    const { getByRole } = render(<ReactLogo />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
