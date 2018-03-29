import { ShallowWrapper } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import * as React from 'react';
import App, { AppProps, AppState } from './App';

describe('Component: App', () => {
  let wrapper: ShallowWrapper<AppProps, AppState>;

  beforeEach(() => {
    const shallow = createShallow({
      untilSelector: 'App',
    });

    wrapper = shallow(<App />);
  });

  it('should render main', () => {
    expect(wrapper.find('main').exists()).toBe(true);
  });
});
