import { ReactWrapper } from 'enzyme';
import { createMount } from 'material-ui/test-utils';
import * as React from 'react';
import { MemoryRouter } from 'react-router';
import Home, { Props, State } from './Home';

describe('Component: Home', () => {
  // Wraps component inside router so we can test with setProps
  const RoutedComponent: React.SFC<Props> = (props) => (
    <MemoryRouter>
      <Home {...props} />
    </MemoryRouter>
  );

  let wrapper: ReactWrapper<Props, State>;

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
