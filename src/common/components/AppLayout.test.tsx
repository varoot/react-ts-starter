import { render } from '../../testUtils';
import testIds from '../constants/testIds';
import AppLayout from './AppLayout';

describe('AppLayout', () => {
  it('should render main container and child element', () => {
    const { getByTestId } = render(<AppLayout>Test</AppLayout>);
    expect(getByTestId(testIds.app.main)).toHaveTextContent('Test');
  });
});
