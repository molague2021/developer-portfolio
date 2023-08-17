import React from 'react';
import { Grid, Typography, styled } from '@mui/material';

import { SocialMedia } from '../../components/SocialMedia';

const StyledTypography = styled(Typography)`
  font-family: Space Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.444px;
`;

export const PortfolioHeader = () => {
  return (
    <Grid item>
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography fontFamily="Space Grotesk">
          adamkeyes
        </StyledTypography>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          sx={{ minWidth: '200px', zIndex: 9, marginRight: '29.51px' }}
        >
          <SocialMedia />
        </Grid>
      </Grid>
    </Grid>
  );
};
