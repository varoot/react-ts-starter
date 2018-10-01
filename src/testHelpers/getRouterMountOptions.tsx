import { MountRendererProps, mount } from 'enzyme';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { MemoryRouter, Router } from 'react-router';

/**
 * Returns context for enzyme when using with Router-enabled components
 */
function getRouterMountOptions(): MountRendererProps {
  const router = mount(<MemoryRouter />);

  // tslint:disable-next-line:no-any
  const history = router.find(Router).prop('history') as any;

  router.unmount();

  return {
    childContextTypes: { router: PropTypes.object.isRequired },
    context: {
      router: {
        history,
        location: history.location,
        match: { path: '/', url: '/', params: {}, isExact: false },
      },
    },
  };
}

export default getRouterMountOptions;
