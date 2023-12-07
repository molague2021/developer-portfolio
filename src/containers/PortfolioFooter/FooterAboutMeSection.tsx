import React from 'react';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SocialMedia } from '../../components/SocialMedia';

const StyledContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: '0 16px',
    width: '375px',
    justifyContent: 'center',
  },
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
  [theme.breakpoints.between('xs', 'sm')]: {
    gap: '344px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    gap: '344px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    position: 'relative',
  },
}));

const StyledNameSocialMediaGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop: '39px',
    flexDirection: 'column',
    width: '154px',
    height: '72px',
    justifyContent: 'space-between',
  },
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
  [theme.breakpoints.between('xs', 'sm')]: {
    background: `var(--White, #FFF)`,
    width: '343px',
    height: '1px',
    flexShrink: '0',
  },
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

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    color: 'var(--white, #fff)',
    fontFamily: 'Space Grotesk',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px',
    letterSpacing: '-0.333px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    color: 'var(--white, #fff)',
    fontFamily: 'Space Grotesk',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px',
    letterSpacing: '-0.444px',
  },
}));

export const FooterAboutMeSection = () => {
  const theme = useTheme();
  const mobileSizeView = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

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
          sx={{ minWidth: mobileSizeView ? '154px' : '200px' }}
        >
          <SocialMedia />
        </Grid>
      </StyledNameSocialMediaGrid>
    </StyledContainer>
  );
};
