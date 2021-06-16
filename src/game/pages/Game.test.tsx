import { fireEvent, render, within } from '../../testUtils';
import Game from './Game';

describe('Game', () => {
  it('should render the title', () => {
    const { getByText } = render(<Game />);
    expect(getByText('Tic Tac Toe')).toBeInTheDocument();
  });

  it('should render 9 buttons', () => {
    const { getByTestId } = render(<Game />);
    const buttons = within(getByTestId('board')).getAllByRole('button');
    expect(buttons).toHaveLength(9);
  });

  it('should mark button with O when clicked', () => {
    const { getByTestId } = render(<Game />);
    const [firstButton] = within(getByTestId('board')).getAllByRole('button');
    expect(firstButton).toHaveTextContent(/^$/);

    fireEvent.click(firstButton);

    expect(firstButton).toHaveTextContent('O');
  });
});
