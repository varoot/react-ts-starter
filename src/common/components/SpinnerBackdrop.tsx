import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import testIds from '../constants/testIds';
import { commonSelectors } from '../store';

/**
 * Backdrop with spinner
 */
function SpinnerBackdrop(): JSX.Element {
  const isShowingSpinner = useSelector(commonSelectors.selectIsShowingSpinner);

  return (
    <Backdrop
      data-testid={testIds.spinner.overlay}
      open={isShowingSpinner}
      sx={{
        color: 'common.white',
        zIndex: 'tooltip',
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default memo(SpinnerBackdrop);
