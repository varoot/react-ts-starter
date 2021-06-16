import { createSelector } from '@reduxjs/toolkit';
import { Board, GameStatus, Player, TicTacToeStateRoot } from '../typings';

export function selectTicTacToeBoard(state: TicTacToeStateRoot): Board {
  return state.ticTacToe.board;
}

export function selectTicTacToeCurrentPlayer(state: TicTacToeStateRoot): Player {
  return state.ticTacToe.currentPlayer;
}

export const selectTicTacToeStatus = createSelector(selectTicTacToeBoard, (board) => {
  if (
    board.some((row) => {
      return row.every((col) => col !== null && col === row[0]);
    }) ||
    board[0].some((col, colIndex) => {
      return board.every((row) => row[colIndex] !== null && row[colIndex] === col);
    }) ||
    (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0])
  ) {
    return GameStatus.Won;
  }

  if (board.every((row) => row.every((col) => col !== null))) {
    return GameStatus.Draw;
  }

  return GameStatus.Ongoing;
});
