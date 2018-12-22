import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface ComponentProps {}

type Props = ComponentProps;

const NotFound: React.SFC<Props> = () => {
  return (
    <div>
      <Typography component="h1" variant="h3">
        404
      </Typography>
      <Typography>
        <code>src/components/NotFound.tsx</code> is rendered when it doesn't match any routes.
      </Typography>
    </div>
  );
};

export type NotFoundProps = Props;
export { NotFound as TestComponent };

export default NotFound;
