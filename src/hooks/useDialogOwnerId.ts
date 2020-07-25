import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { dialogClearByOwnerId } from '../store/dialog/actions';
import { IdType } from '../types';

/**
 * Generate unique ID for the component to be used with opening dialogs
 */
export function useOwnerId(): IdType {
  const ownerId = useMemo(() => Symbol('ownerId'), []);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(dialogClearByOwnerId(ownerId));
    };
  }, [dispatch, ownerId]);

  return ownerId;
}

export default useOwnerId;
