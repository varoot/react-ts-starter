import { ReactWrapper } from 'enzyme';
import { createMount } from 'material-ui/test-utils';
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
