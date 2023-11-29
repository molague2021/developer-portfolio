import React from 'react';
import { Grid, Typography, styled } from '@mui/material';

import { SocialMedia } from '../../components/SocialMedia';

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px' /* 100% */,
    letterSpacing: '-0.333px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px' /* 100% */,
    letterSpacing: '-0.444px',
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '154px',
    height: '72px',
    // margin: '0 auto',
    // padding: '20px 16px',
    // textAlign: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
}));

const StyledSocialMediaGrid = styled(Grid)(({ theme }) => ({
  zIndex: 9,
  [theme.breakpoints.between('xs', 'sm')]: {
    minWidth: '154px',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    minWidth: '200px',
    marginRight: '29.51px',
    justifyContent: 'space-between',
  },
}));

export const PortfolioHeader = () => {
  return (
    <StyledGrid
      item
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <StyledTypography fontFamily="Space Grotesk">adamkeyes</StyledTypography>
      <StyledSocialMediaGrid item display="flex">
        <SocialMedia />
      </StyledSocialMediaGrid>
    </StyledGrid>
  );
};
