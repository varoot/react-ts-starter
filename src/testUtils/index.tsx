import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { RedirectProps } from 'react-router';
import AppProvider from '../AppProvider';

interface CustomRenderOptions extends RenderOptions {
  route?: RedirectProps['to'];
}

const customRender = (ui: ReactElement, options: CustomRenderOptions = {}): RenderResult =>
  render(ui, {
    ...options,
    wrapper: ({ children }): ReactElement => (
      <AppProvider initialEntries={options.route === undefined ? undefined : [options.route]}>
        {options.wrapper ? <options.wrapper>{children}</options.wrapper> : children}
      </AppProvider>
    ),
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
