import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ticTacToeActions, ticTacToeSelectors } from '../store';
import { GameStatus } from '../typings';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  board: {
    width: theme.spacing(30),
  },
  tile: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius,
    height: theme.spacing(9.5),
    margin: theme.spacing(0.25),
    width: theme.spacing(9.5),
  },
}));

const Game: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const board = useSelector(ticTacToeSelectors.selectTicTacToeBoard);
  const currentPlayer = useSelector(ticTacToeSelectors.selectTicTacToeCurrentPlayer);
  const gameStatus = useSelector(ticTacToeSelectors.selectTicTacToeStatus);

  function getClickHandler(col: number, row: number) {
    return () => {
      dispatch(ticTacToeActions.place({ col, row }));
    };
  }

  const tiles: JSX.Element[] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const key = `${rowIndex}:${colIndex}`;
      tiles.push(
        <ButtonBase
          key={key}
          className={classes.tile}
          disabled={gameStatus !== GameStatus.Ongoing}
          type="button"
          onClick={getClickHandler(colIndex, rowIndex)}
        >
          {col}
        </ButtonBase>,
      );
    });
  });

  return (
    <div className={classes.root}>
      <Typography paragraph component="h1" variant="h2">
        Tic Tac Toe
      </Typography>
      <Button onClick={() => dispatch(ticTacToeActions.loadGame())}>Load Game</Button>
      <Button onClick={() => dispatch(ticTacToeActions.saveGame())}>Save Game</Button>
      <Typography>Status: {gameStatus}</Typography>
      <Typography>Current Player: {currentPlayer}</Typography>
      <div className={classes.board} data-testid="board">
        {tiles}
      </div>
    </div>
  );
};

export default Game;
