import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { FC, memo } from 'react';
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
const SpinnerBackdrop: FC = (props) => {
  const classes = useStyles(props);
  const isShowingSpinner = useSelector(commonSelectors.selectIsShowingSpinner);

  return (
    <Backdrop className={clsx(classes.root)} data-testid={testIds.spinner.overlay} open={isShowingSpinner}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default memo(SpinnerBackdrop);
