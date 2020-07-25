import Typography from '@material-ui/core/Typography';
import React, { FC, memo } from 'react';

const NotFound: FC = () => {
  return (
    <div>
      <Typography component="h1" variant="h3">
        404
      </Typography>
      <Typography>
        <code>src/components/NotFound.tsx</code> is rendered when it doesn’t match any routes.
      </Typography>
    </div>
  );
};

export default memo(NotFound);
