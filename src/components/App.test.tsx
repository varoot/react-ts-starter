import { createShallow } from '@material-ui/core/test-utils';
import { ShallowWrapper } from 'enzyme';
import React from 'react';
import { AppProps, TestComponent as App } from './App';

describe('Component: App', () => {
  let shallow: ReturnType<typeof createShallow>;
  let wrapper: ShallowWrapper<AppProps>;

  beforeEach(() => {
    shallow = createShallow({
      untilSelector: 'App',
    });
  });

  it('should render main', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('main').exists()).toBe(true);
  });
});
