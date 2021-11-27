import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
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

theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        // Undo Material UI's font smoothing rules
        // https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/
        MozOsxFontSmoothing: 'initial',
        WebkitFontSmoothing: 'initial',
      },
      code: {
        color: theme.palette.secondary.main,
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    },
  },
};

export default theme;
