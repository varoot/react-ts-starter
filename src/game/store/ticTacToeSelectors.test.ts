import { rootReducer } from '../../store';
import { GameStatus, Player, TicTacToeStateRoot } from '../typings';
import { selectTicTacToeStatus } from './ticTacToeSelectors';

describe('ticTacToeSelectors', () => {
  const initialState = rootReducer(undefined, {} as any);

  describe('selectTicTacToeStatus', () => {
    it('should return Ongoing for initial state', () => {
      const state = initialState;
      expect(selectTicTacToeStatus(state)).toBe(GameStatus.Ongoing);
    });

    it('should return Won if whole row is marked by one player', () => {
      const state: TicTacToeStateRoot = {
        ...initialState,
        ticTacToe: {
          ...initialState.ticTacToe,
          board: [
            [null, Player.Two, null],
            [Player.One, Player.One, Player.One],
            [null, null, Player.Two],
          ],
        },
      };
      expect(selectTicTacToeStatus(state)).toBe(GameStatus.Won);
    });

    it('should return Won if whole column is marked by one player', () => {
      const state: TicTacToeStateRoot = {
        ...initialState,
        ticTacToe: {
          ...initialState.ticTacToe,
          board: [
            [null, Player.Two, null],
            [Player.One, Player.Two, Player.One],
            [Player.One, Player.Two, null],
          ],
        },
      };
      expect(selectTicTacToeStatus(state)).toBe(GameStatus.Won);
    });

    it('should return Won if one player marks diagonally (left)', () => {
      const state: TicTacToeStateRoot = {
        ...initialState,
        ticTacToe: {
          ...initialState.ticTacToe,
          board: [
            [Player.Two, null, null],
            [Player.One, Player.Two, Player.One],
            [Player.One, null, Player.Two],
          ],
        },
      };
      expect(selectTicTacToeStatus(state)).toBe(GameStatus.Won);
    });

    it('should return Won if one player marks diagonally (right)', () => {
      const state: TicTacToeStateRoot = {
        ...initialState,
        ticTacToe: {
          ...initialState.ticTacToe,
          board: [
            [Player.Two, null, Player.One],
            [null, Player.One, null],
            [Player.One, null, Player.Two],
          ],
        },
      };
      expect(selectTicTacToeStatus(state)).toBe(GameStatus.Won);
    });

    it('should return Draw if all tiles are marked and no one won', () => {
      const state: TicTacToeStateRoot = {
        ...initialState,
        ticTacToe: {
          ...initialState.ticTacToe,
          board: [
            [Player.Two, Player.Two, Player.One],
            [Player.One, Player.One, Player.Two],
            [Player.Two, Player.One, Player.One],
          ],
        },
      };
      expect(selectTicTacToeStatus(state)).toBe(GameStatus.Draw);
    });
  });
});
