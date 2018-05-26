import { createMount } from '@material-ui/core/test-utils';
import { ReactWrapper } from 'enzyme';
import * as React from 'react';
import NotFound, { NotFoundProps } from './NotFound';

describe('Component: NotFound', () => {
  let wrapper: ReactWrapper<NotFoundProps>;

  beforeEach(() => {
    const mount = createMount();
    wrapper = mount(<NotFound />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render "404"', () => {
    expect(wrapper.text()).toContain('404');
  });
});
