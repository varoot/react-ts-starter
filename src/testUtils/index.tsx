import { render, RenderOptions } from '@testing-library/react';
import React from 'react';
import { RedirectProps } from 'react-router';
import AppProvider from '../AppProvider';

interface CustomRenderOptions extends RenderOptions {
  route?: RedirectProps['to'];
}

const customRender = (ui: React.ReactElement<unknown>, options: CustomRenderOptions = {}): ReturnType<typeof render> =>
  render(ui, {
    wrapper: ({ children }): React.ReactElement => (
      <AppProvider initialEntries={options.route === undefined ? undefined : [options.route]}>{children}</AppProvider>
    ),
    ...options,
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
