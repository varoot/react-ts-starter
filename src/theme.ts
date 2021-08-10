import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
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

const theme = createTheme({
  media: {
    animation: '@media (prefers-reduced-motion: no-preference)',
  },
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
