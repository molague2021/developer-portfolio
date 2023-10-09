import React from 'react';
import { Stack, Grid, styled, Button } from '@mui/material';

import pattent_rings from '../../assets/pattern_rings.svg';
import { AboutMeHeader } from '../../components/AboutMeHeader';

const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: white;
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    letter-spacing: 2.286px;
    text-wrap: nowrap;
  }
  &.MuiButton-root:hover {
    color: #4ee1a0;
  }
`;

const StyledButtonUnderline = styled('div')`
  width: 120px;
  height: 2px;
  background: var(--green, #4ee1a0);
`;

interface PortfolioAboutMeProps {
  onContactMeOnClick: () => void;
}

export const PortfolioAboutMe = ({
  onContactMeOnClick,
}: PortfolioAboutMeProps) => {
  return (
    <Grid sx={{ height: '688px', position: 'relative' }}>
      <Grid
        container
        sx={{
          width: '530px',
          height: '129px',
          flexShrink: '0',
          position: 'absolute',
          marginTop: '62px',
          left: -265,
        }}
      >
        <img
          src={pattent_rings}
          style={{ width: '530px', height: '129px', flexShrink: '0' }}
        />
      </Grid>
      <AboutMeHeader />
      <Grid item display="flex" sx={{ marginTop: '66px' }}>
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{
            width: '120px',
            gap: '10px',
          }}
        >
          <StyledButton onClick={onContactMeOnClick}>CONTACT ME</StyledButton>
          <StyledButtonUnderline />
        </Stack>
      </Grid>
    </Grid>
  );
};
