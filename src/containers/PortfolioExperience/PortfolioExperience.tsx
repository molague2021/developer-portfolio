import React from 'react';
import { Grid, styled, Stack, Typography } from '@mui/material';

import { portfolioExperienceList } from '../../constants/portfolioExperience';
import pattent_rings from '../../assets/pattern_rings.svg';

const StyledDivider = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    width: '706px',
    height: '1px',
    flexShrink: '0',
    background: 'white',
  },
  [theme.breakpoints.up('md')]: {
    width: '1110px',
    height: '1px',
    flexShrink: '0',
    background: 'white',
  },
}));

const StyledContainer = styled(Grid)(({ theme }) => ({
  width: 'auto',
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '708px',
    height: '451px',
    position: 'relative',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '1110px',
    height: '327px',
    position: 'relative',
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: '530px',
  height: '129px',
  flexShrink: '0',
  position: 'absolute',
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: '386px',
    marginLeft: '540px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '252px',
    right: '-415px',
  },
}));

const StyledHeading = styled(Typography)`
  color: white;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Heading (L) */
  font-family: Space Grotesk;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
  letter-spacing: -1.5px;
`;

const StyledBody = styled(Typography)`
  color: white;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body */
  font-family: Space Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const PortfolioExperience = () => {
  return (
    <StyledContainer container>
      <StyledDivider />
      <Grid
        display="flex"
        flexWrap="wrap"
        alignItems="flex-end"
        gap="7px"
        sx={{
          maxWidth: '1110px',
        }}
      >
        {portfolioExperienceList.map((experience) => {
          return (
            <Grid
              item
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              gap="14px"
              sx={{ minWidth: '345px', height: '98px' }}
            >
              <StyledHeading>{experience.name}</StyledHeading>
              <StyledBody>{`${experience.years} Years Experience`}</StyledBody>
            </Grid>
          );
        })}
      </Grid>
      <StyledGrid sx={{}}>
        <img
          src={pattent_rings}
          style={{ width: '530px', height: '129px', flexShrink: '0' }}
        />
      </StyledGrid>
    </StyledContainer>
  );
};
