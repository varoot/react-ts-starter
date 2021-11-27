import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import testIds from '../constants/testIds';
import { commonSelectors } from '../store';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: theme.palette.common.white,
      zIndex: theme.zIndex.tooltip + 1,
    },
  }),
  { name: 'SpinnerBackdrop' },
);

/**
 * Backdrop with spinner
 */
function SpinnerBackdrop(): JSX.Element {
  const classes = useStyles();
  const isShowingSpinner = useSelector(commonSelectors.selectIsShowingSpinner);

  return (
    <Backdrop className={clsx(classes.root)} data-testid={testIds.spinner.overlay} open={isShowingSpinner}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default memo(SpinnerBackdrop);
