import { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUniqueToken } from '../hooks';
import { commonActions } from '../store';

interface Props {
  /** Description for unique token, used for debugging */
  id: string;
}

/**
 * Activate global spinner while mounted
 */
const SpinnerOverlay: FC<Props> = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  const token = useUniqueToken(id);

  useEffect(() => {
    dispatch(commonActions.spinnerStart(token));

    return () => {
      dispatch(commonActions.spinnerStop(token));
    };
  }, [token, dispatch]);

  return null;
};

export type SpinnerOverlayProps = Props;
export default memo(SpinnerOverlay);
