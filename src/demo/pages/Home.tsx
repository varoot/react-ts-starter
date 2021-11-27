import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import ReactLogo from '../components/ReactLogo';

interface Props {
  /** Page title */
  title?: string;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      textAlign: 'center',
    },
    header: {
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.getContrastText(theme.palette.grey[900]),
    },
    logo: {
      height: '40vmin',
    },
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(2),
    },
  }),
  { name: 'Home' },
);

/**
 * Demo home page
 */
function Home(props: Props): JSX.Element {
  const { t } = useTranslation('demo');
  const { title = t('home.welcome') } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={clsx(classes.header, classes.padding)}>
        <ReactLogo spinning className={classes.logo} />
        <Typography color="inherit" component="h2" variant="h3">
          {title}
        </Typography>
      </div>
      <Typography className={classes.margin}>
        <Trans
          components={[<code key="code" />]}
          i18nKey="home.editToReload"
          ns="demo"
          values={{ filename: 'src/demo/pages/Home.tsx' }}
        />
      </Typography>
      <Typography className={classes.margin}>
        <Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          {t('home.learnReact')}
        </Link>
      </Typography>
    </div>
  );
}

export type HomeProps = Props;
export default memo(Home);
