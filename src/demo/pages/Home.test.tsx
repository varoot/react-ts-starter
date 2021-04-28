import { render } from '../../testUtils';
import Home from './Home';

describe('Home', () => {
  it('should render "Welcome to React" by default', () => {
    const { container } = render(<Home />);
    expect(container).toHaveTextContent('home.welcome');
  });

  it('should render given title', () => {
    const { container } = render(<Home title="Hello World" />);
    expect(container).toHaveTextContent('Hello World');
  });
});
