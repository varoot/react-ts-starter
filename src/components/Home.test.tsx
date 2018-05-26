import { createMount } from '@material-ui/core/test-utils';
import { ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../store';
import Home, { HomeProps, HomeState } from './Home';

describe('Component: Home', () => {
  // Wraps component inside router so we can test with setProps
  const RoutedComponent: React.SFC<HomeProps> = (props) => (
    <Provider store={store}>
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>
    </Provider>
  );

  let wrapper: ReactWrapper<HomeProps, HomeState>;

  beforeEach(() => {
    const mount = createMount();
    wrapper = mount(<RoutedComponent />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render "Welcome to React" by default', () => {
    expect(wrapper.text()).toContain('Welcome to React');
  });

  it('should render given title', () => {
    wrapper.setProps({ title: 'Hello World' });
    expect(wrapper.text()).toContain('Hello World');
  });
});
