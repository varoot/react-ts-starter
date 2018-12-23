import { createMount } from '@material-ui/core/test-utils';
import { ReactWrapper } from 'enzyme';
import React from 'react';
import getRouterMountOptions from '../testHelpers/getRouterMountOptions';
import { HomeProps, TestComponent as Home } from './Home';

describe('Component: Home', () => {
  let defaultProps: HomeProps;
  let mount: ReturnType<typeof createMount>;
  let wrapper: ReactWrapper<HomeProps>;

  beforeEach(() => {
    mount = createMount();
    defaultProps = {
      snackbarPush: jest.fn(),
    };
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render "Welcome to React" by default', () => {
    wrapper = mount(<Home {...defaultProps} />, getRouterMountOptions());
    expect(wrapper.text()).toContain('Welcome to React');
  });

  it('should render given title', () => {
    wrapper = mount(<Home {...defaultProps} title="Hello World" />, getRouterMountOptions());
    expect(wrapper.text()).toContain('Hello World');
  });
});
