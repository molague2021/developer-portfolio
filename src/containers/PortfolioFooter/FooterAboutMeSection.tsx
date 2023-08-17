import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import { SocialMedia } from '../../components/SocialMedia';

const StyledDivider = styled('div')`
  width: 1110px;
  height: 1px;
  flex-shrink: 0;
  background: white;
`;

const StyledTypography = styled(Typography)`
  font-family: Space Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.444px;
`;
export const FooterAboutMeSection = () => {
  return (
    <>
      <Grid
        container
        alignContent="space-between"
        sx={{ position: 'relative', marginTop: '92px' }}
      >
        <StyledDivider />
      </Grid>
      <Grid
        item
        alignContent="space-between"
        sx={{ position: 'relative', marginTop: '47px' }}
      >
        <Grid
          item
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StyledTypography>adamkeyes</StyledTypography>
          <Grid
            item
            display="flex"
            justifyContent="space-between"
            sx={{ minWidth: '200px' }}
          >
            <SocialMedia />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
