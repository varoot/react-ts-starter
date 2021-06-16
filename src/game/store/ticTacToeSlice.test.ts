import { Player } from '../typings';
import { initialState, ticTacToeActions, ticTacToeReducer } from './ticTacToeSlice';

describe('ticTacToeReducer', () => {
  it('should set initial state', () => {
    const state = ticTacToeReducer(undefined, {} as any);
    expect(state).toEqual(initialState);
  });

  it('should reset to initial state', () => {
    const state = ticTacToeReducer(
      {
        board: [
          [Player.One, null, null],
          [null, null, null],
          [null, null, null],
        ],
        currentPlayer: Player.Two,
      },
      ticTacToeActions.reset(),
    );
    expect(state).toEqual(initialState);
  });

  it('should place the mark and alternate player', () => {
    let state = initialState;
    state = ticTacToeReducer(state, ticTacToeActions.place({ col: 0, row: 0 }));
    expect(state).toEqual({
      board: [
        [Player.One, null, null],
        [null, null, null],
        [null, null, null],
      ],
      currentPlayer: Player.Two,
    });

    state = ticTacToeReducer(state, ticTacToeActions.place({ col: 1, row: 1 }));
    expect(state).toEqual({
      board: [
        [Player.One, null, null],
        [null, Player.Two, null],
        [null, null, null],
      ],
      currentPlayer: Player.One,
    });
  });

  it('should return the same state if placement is not valid', () => {
    const state = {
      board: [
        [Player.One, null, null],
        [null, null, null],
        [null, null, null],
      ],
      currentPlayer: Player.Two,
    };

    let updatedState = ticTacToeReducer(state, ticTacToeActions.place({ col: 0, row: 0 }));
    expect(updatedState).toBe(state);

    updatedState = ticTacToeReducer(state, ticTacToeActions.place({ col: 4, row: 4 }));
    expect(updatedState).toBe(state);
  });
});
