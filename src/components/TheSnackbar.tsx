import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import * as React from 'react';
import { MapStateToProps, connect } from 'react-redux';
import { snackbarPop } from '../actions';
import snackbarConfig from '../config/snackbarConfig';
import { StoreState } from '../reducers';
import { getSnackbarItemFirst } from '../selectors';
import SnackbarItem from '../types/SnackbarItem';

interface Props {}

interface StoreProps {
  snackbarItem: SnackbarItem | undefined;
}

const mapStateToProps: MapStateToProps<StoreProps, Props, StoreState> = (store) => ({
  snackbarItem: getSnackbarItemFirst(store),
});

interface DispatchProps {
  snackbarPop: typeof snackbarPop;
}

interface State {
  isOpen: boolean;
}

class TheSnackbar extends React.PureComponent<Props & StoreProps & DispatchProps, State> {
  state: State = {
    isOpen: false,
  };

  componentWillReceiveProps(nextProps: StoreProps) {
    if (nextProps.snackbarItem != undefined) {
      this.setState({ isOpen: true });
    }
  }

  handleClose = (event: React.MouseEvent<HTMLElement>, reason: string) => {
    if (reason !== 'clickaway') {
      this.setState({ isOpen: false });
    }
  };

  checkExit = () => {
    this.props.snackbarPop();
  };

  getActionButtonCallback = (callback: () => void) => (event: React.MouseEvent<HTMLElement>) => {
    this.handleClose(event, 'action');
    callback();
  };

  getActionButton(): JSX.Element | undefined {
    const { snackbarItem } = this.props;

    if (snackbarItem == undefined || snackbarItem.button == undefined) {
      return;
    }

    return (
      <Button
        color="secondary"
        onClick={this.getActionButtonCallback(snackbarItem.button.callback)}
        size="small"
      >
        {snackbarItem.button.label}
      </Button>
    );
  }

  render() {
    const { snackbarItem } = this.props;
    const duration =
      snackbarItem != undefined && Boolean(snackbarItem.isLong)
        ? snackbarConfig.duration.long
        : snackbarConfig.duration.short;

    return (
      <Snackbar
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        autoHideDuration={duration}
        action={this.getActionButton()}
        message={
          <span id="message-id">{snackbarItem == undefined ? '' : snackbarItem.message}</span>
        }
        open={this.state.isOpen}
        onClose={this.handleClose}
        onExited={this.checkExit}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  { snackbarPop },
)(TheSnackbar);
