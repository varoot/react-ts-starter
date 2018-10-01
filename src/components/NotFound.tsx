import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface Props {}

const NotFound: React.SFC<Props> = () => {
  return (
    <div>
      <Typography variant="display2" component="h1">
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
