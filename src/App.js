import React from 'react';
import { Grid } from '@mui/material';

import { PortfolioHeader } from './components/PortfolioHeader/PortfolioHeader';

export const App = () => {
  return (
    <Grid container flexDirection="column" sx={{ padding: '39px 165px 92px' }}>
      <PortfolioHeader />
      <div>App, Hello World!!!</div>
    </Grid>
  );
};
