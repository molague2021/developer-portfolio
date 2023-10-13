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

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '375px',
    margin: '0 auto',
    padding: '20px 16px',
    textAlign: 'center',
    overflow: 'hidden',
  },
}));

const StyledSocialMediaGrid = styled(Grid)(({ theme }) => ({
  minWidth: '200px',
  zIndex: 9,
  [theme.breakpoints.between('md', 'xl')]: {
    marginRight: '29.51px',
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
      <StyledSocialMediaGrid item display="flex" justifyContent="space-between">
        <SocialMedia />
      </StyledSocialMediaGrid>
    </StyledGrid>
  );
};
