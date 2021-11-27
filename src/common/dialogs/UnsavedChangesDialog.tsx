import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogComponentProps } from '../typings';

type Props = DialogComponentProps<boolean>;

/**
 * "You have unsaved changes" dialog
 */
function UnsavedChangesDialog(props: Props): JSX.Element {
  const { open, onClose, onResolve, TransitionProps } = props;
  const { t } = useTranslation('common');

  return (
    <Dialog open={open} TransitionProps={TransitionProps} onClose={onClose}>
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
}

export type UnsavedChangesDialogProps = Props;
export default memo(UnsavedChangesDialog);
