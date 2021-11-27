import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { memo } from 'react';
import logoSvg from '../assets/logo.svg';

interface Props {
  className?: string;
  /** Whether the logo should spin */
  spinning?: boolean;
}

const useStyles = makeStyles(
  (theme) => ({
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    root: {
      pointerEvents: 'none',
    },
    spinning: {
      [theme.media.animation]: {
        animation: '$spin infinite 20s linear',
      },
    },
  }),
  { name: 'ReactLogo' },
);

/**
 * Spinning React logo
 */
function ReactLogo(props: Props): JSX.Element {
  const { className, spinning } = props;
  const classes = useStyles(props);

  return <img alt="logo" className={clsx(classes.root, className, { [classes.spinning]: spinning })} src={logoSvg} />;
}

export type ReactLogoProps = Props;
export default memo(ReactLogo);
