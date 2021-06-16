export enum Player {
  One = 'O',
  Two = 'X',
}

export type Board = (Player | null)[][];

export enum GameStatus {
  Won = 'Won',
  Draw = 'Draw',
  Ongoing = 'Ongoing',
}

export interface TicTacToeState {
  board: Board;
  currentPlayer: Player;
}
