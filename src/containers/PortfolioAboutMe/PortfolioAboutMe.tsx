import React from 'react';
import { Stack, Grid, styled, Button, useTheme } from '@mui/material';

import pattent_rings from '../../assets/pattern_rings.svg';
import { AboutMeHeader } from '../../components/AboutMeHeader';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '343px',
    height: '575px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    height: '688px',
  },
}));

const StyledImageGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    marginLeft: '-347px',
    marginTop: '32px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    marginTop: '62px',
    left: -265,
  },
}));

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
  const theme = useTheme();
  const mobileSizeView = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <StyledGrid sx={{ position: 'relative' }}>
      <StyledImageGrid
        container
        sx={{
          width: '530px',
          height: '129px',
          flexShrink: '0',
          position: 'absolute',
        }}
      >
        <img
          src={pattent_rings}
          style={{ width: '530px', height: '129px', flexShrink: '0' }}
        />
      </StyledImageGrid>
      <AboutMeHeader />
      <Grid
        item
        display="flex"
        sx={{
          marginTop: mobileSizeView ? '24px' : '66px',
          justifyContent: mobileSizeView ? 'center' : '',
        }}
      >
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{
            width: '120px',
            gap: '10px',
          }}
        >
          <StyledButton
            sx={{ padding: mobileSizeView ? '0 8px' : '6px 8px' }}
            onClick={onContactMeOnClick}
          >
            CONTACT ME
          </StyledButton>
          <StyledButtonUnderline />
        </Stack>
      </Grid>
    </StyledGrid>
  );
};
