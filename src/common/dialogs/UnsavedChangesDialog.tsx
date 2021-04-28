import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogComponentProps } from '../typings';

type Props = DialogComponentProps<boolean>;

/**
 * "You have unsaved changes" dialog
 */
const UnsavedChangesDialog: FC<Props> = (props) => {
  const { open, onClose, onExited, onResolve } = props;
  const { t } = useTranslation('common');

  return (
    <Dialog open={open} onClose={onClose} onExited={onExited}>
      <DialogTitle>{t('unsavedChangesDialog.header')}</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={() => onResolve(false)}>
          {t('action.cancel')}
        </Button>
        <Button color="primary" onClick={() => onResolve(true)}>
          {t('action.discardChanges')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export type UnsavedChangesDialogProps = Props;
export default memo(UnsavedChangesDialog);
