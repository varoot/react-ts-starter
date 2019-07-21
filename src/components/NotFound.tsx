import Typography from '@material-ui/core/Typography';
import React from 'react';

interface Props {}

const NotFound: React.FC<Props> = () => {
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
export default React.memo(NotFound);
