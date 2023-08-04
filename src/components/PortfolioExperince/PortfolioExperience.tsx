import React from 'react';
import { Grid, styled, Stack, Typography } from '@mui/material';

import { portfolioExperienceList } from './constants/portfolioExperience';

const StyledDivider = styled('div')`
  width: 1110px;
  height: 1px;
  flex-shrink: 0;
  background: white;
`;

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
    <Stack
      display="flex"
      justifyContent="space-between"
      sx={{
        marginTop: '65px',
        height: '327px',
        width: '1110px',
        flexShrink: 0,
      }}
    >
      <StyledDivider />
      <Grid
        container
        // display="grid"
        // gridTemplateColumns="auto auto auto"
        // sx={{ height: '254px', width: '1110px', flexShrink: 0 }}
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
              sx={{ width: '345px' }}
            >
              <StyledHeading>{experience.name}</StyledHeading>
              <StyledBody>{`${experience.years} Years Experience`}</StyledBody>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
