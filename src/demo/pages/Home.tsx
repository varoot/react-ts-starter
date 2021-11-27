import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import ReactLogo from '../components/ReactLogo';

interface Props {
  /** Page title */
  title?: string;
}

/**
 * Demo home page
 */
function Home(props: Props): JSX.Element {
  const { t } = useTranslation('demo');
  const { title = t('home.welcome') } = props;

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={(theme) => {
          const bgcolor = theme.palette.text.primary;
          return {
            bgcolor,
            color: theme.palette.getContrastText(bgcolor),
            padding: theme.spacing(2),
          };
        }}
      >
        <ReactLogo spinning sx={{ height: '40vmin' }} />
        <Typography color="inherit" component="h2" variant="h3">
          {title}
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography>
          <Trans
            components={[<code key="code" />]}
            i18nKey="home.editToReload"
            ns="demo"
            values={{ filename: 'src/demo/pages/Home.tsx' }}
          />
        </Typography>
        <Typography>
          <Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
            {t('home.learnReact')}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export type HomeProps = Props;
export default memo(Home);
