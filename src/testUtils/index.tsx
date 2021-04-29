import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { RedirectProps } from 'react-router-dom';
import CoreProvider from '../CoreProvider';

interface CustomRenderOptions extends RenderOptions {
  route?: RedirectProps['to'];
}

const customRender = (ui: ReactElement, options: CustomRenderOptions = {}): RenderResult =>
  render(ui, {
    ...options,
    wrapper: ({ children }): ReactElement => (
      <CoreProvider initialEntries={options.route === undefined ? undefined : [options.route]}>
        {options.wrapper ? <options.wrapper>{children}</options.wrapper> : children}
      </CoreProvider>
    ),
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
