import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import { SocialMedia } from '../../components/SocialMedia';

const StyledContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '0 15px',
    width: '768px',
    height: '63px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    position: 'relative',
    marginTop: '92px',
  },
}));

const StyledItemGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    gap: '344px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    position: 'relative',
  },
}));

const StyledNameSocialMediaGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    gap: '344px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    gap: '746px',
    position: 'relative',
    marginTop: '47px',
  },
}));

const StyledDivider = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    background: `var(--White, #FFF)`,
    width: '708px',
    height: '1px',
    flexShrink: '0',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    height: '1px',
    flexShrink: '0',
    background: 'white',
  },
}));

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
    <StyledContainer container alignContent="space-between">
      <StyledItemGrid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StyledDivider />
      </StyledItemGrid>
      <StyledNameSocialMediaGrid
        item
        display="inline-flex;"
        alignItems="center"
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
      </StyledNameSocialMediaGrid>
    </StyledContainer>
  );
};
