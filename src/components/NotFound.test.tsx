import { createMount } from '@material-ui/core/test-utils';
import { ReactWrapper } from 'enzyme';
import * as React from 'react';
import { NotFoundProps, TestComponent as NotFound } from './NotFound';

describe('Component: NotFound', () => {
  let mount: ReturnType<typeof createMount>;
  let wrapper: ReactWrapper<NotFoundProps>;

  beforeEach(() => {
    mount = createMount();
  });

  it('should render "404"', () => {
    wrapper = mount(<NotFound />);
    expect(wrapper.text()).toContain('404');
    wrapper.unmount();
  });
});
