import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dialogClose, dialogRemove } from '../store/dialog/actions';
import { getDialogs } from '../store/dialog/selectors';

const GlobalDialog: FC = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector(getDialogs);
  return (
    <>
      {dialogs.map((dialog) => (
        <dialog.component
          {...dialog.props}
          key={dialog.key}
          open={dialog.open}
          onClose={() => {
            dispatch(dialogClose(dialog.key));
            dialog.resolve();
          }}
          onExited={() => {
            dispatch(dialogRemove(dialog.key));
          }}
          onResolve={(value: unknown) => {
            dispatch(dialogClose(dialog.key));
            dialog.resolve(value);
          }}
        />
      ))}
    </>
  );
};

export default memo(GlobalDialog);
