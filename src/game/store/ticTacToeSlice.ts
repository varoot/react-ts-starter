import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, TicTacToeState, TicTacToeStateRoot } from '../typings';

export const initialState: TicTacToeState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: Player.One,
};

const loadGame = createAsyncThunk('ticTacToe/loadGame', async (): Promise<TicTacToeState> => {
  const sessionData = localStorage.getItem('tictactoe');
  if (!sessionData) {
    throw new Error('no data');
  }

  const state = JSON.parse(sessionData);
  if (Array.isArray(state.board) && state.board.length === 3) {
    return state;
  }

  throw new Error('error parsing data');
});

const saveGame = createAsyncThunk<void, void, { state: TicTacToeStateRoot }>(
  'ticTacToe/saveGame',
  async (_, thunkAPI): Promise<void> => {
    const gameState = thunkAPI.getState().ticTacToe;
    localStorage.setItem('tictactoe', JSON.stringify(gameState));
  },
);

export const ticTacToeSlice = createSlice({
  name: 'ticTacToe',
  initialState,
  reducers: {
    place(state, action: PayloadAction<{ col: number; row: number }>) {
      const { currentPlayer } = state;
      const { col, row } = action.payload;
      if (state.board[row]?.[col] === null) {
        state.board[row][col] = currentPlayer;
        state.currentPlayer = currentPlayer === Player.One ? Player.Two : Player.One;
      }
    },
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadGame.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const ticTacToeActions = { ...ticTacToeSlice.actions, loadGame, saveGame };
export const ticTacToeReducer = ticTacToeSlice.reducer;
