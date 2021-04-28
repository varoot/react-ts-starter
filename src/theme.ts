import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';

function createShadow(elevation: number): string {
  return `0px ${elevation}px ${elevation}px -${Math.ceil(elevation / 2)}px rgba(0,0,0,0.2)`;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface ThemeExtra {
    // Add theme's custom properties here
    media: {
      animation: string;
    };
  }

  interface Theme extends ThemeExtra {}

  interface ThemeOptions extends ThemeExtra {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
}

const theme = createMuiTheme({
  media: {
    animation: '@media (prefers-reduced-motion: no-preference)',
  },
  shadows: ['none', ...[...Array(24)].map((_, index) => createShadow(index + 1))] as Shadows,
});

theme.overrides = {
  ...theme.overrides,
  MuiCssBaseline: {
    '@global': {
      html: {
        /*
        // Not recommended: https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        */
      },
      code: {
        color: theme.palette.secondary.main,
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    },
  },
};

export default theme;
