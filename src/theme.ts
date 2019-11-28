import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface ThemeExtra {
    // Add theme's custom properties here
  }

  interface Theme extends ThemeExtra {}

  interface ThemeOptions extends ThemeExtra {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
}

const theme = createMuiTheme();

export default theme;
