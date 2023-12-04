import React from 'react';
import { Grid, styled, Stack, Typography } from '@mui/material';

import { portfolioExperienceList } from '../../constants/portfolioExperience';
import pattent_rings from '../../assets/pattern_rings.svg';

const StyledDivider = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '345px',
    height: '1px',
    flexShrink: '0',
    background: 'white',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '706px',
    height: '1px',
    flexShrink: '0',
    background: 'white',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    height: '1px',
    flexShrink: '0',
    background: 'white',
  },
}));

const StyledContainer = styled(Grid)(({ theme }) => ({
  width: 'auto',
  [theme.breakpoints.between('xs', 'sm')]: {
    maxWidth: '345px',

    position: 'relative',
    marginTop: '60px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '708px',
    height: '451px',
    position: 'relative',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    maxWidth: '1110px',
    height: '327px',
    marginTop: '77px',
    position: 'relative',
  },
}));

const StyledImgGrid = styled(Grid)(({ theme }) => ({
  width: '530px',
  height: '129px',
  flexShrink: '0',
  position: 'absolute',
  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop: '543px',
    marginLeft: '173px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: '386px',
    marginLeft: '540px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    marginTop: '252px',
    right: '-415px',
  },
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    height: '604px',
    alignContent: 'center',
    gap: '24px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    alignItems: 'flex-end',
    gap: '7px',
    maxWidth: '1110px',
  },
}));

const StyledExperienceContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '67px',
    alignItems: 'center',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '98px',
    gap: '14px',
  },
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: `var(--White, #FFF)`,
  fontFeatureSettings: `'clig' off, 'liga' off`,
  [theme.breakpoints.between('xs', 'sm')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '40px' /* 116.667% */,
    letterSpacing: '-1px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '56px' /* 116.667% */,
    letterSpacing: '-1.5px',
  },
}));

const StyledBody = styled(Typography)(({ theme }) => ({
  color: `var(--White, #FFF)`,
  fontFeatureSettings: `'clig' off, 'liga' off`,
  [theme.breakpoints.between('xs', 'sm')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '26px',
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '28px',
  },
}));

export const PortfolioExperience = () => {
  return (
    <StyledContainer container>
      <StyledDivider />
      <StyledGridItem display="flex" flexWrap="wrap">
        {portfolioExperienceList.map((experience) => {
          return (
            <StyledExperienceContainer
              item
              display="flex"
              sx={{ minWidth: '345px' }}
            >
              <StyledHeading>{experience.name}</StyledHeading>
              <StyledBody>{`${experience.years} Years Experience`}</StyledBody>
            </StyledExperienceContainer>
          );
        })}
      </StyledGridItem>
      <StyledImgGrid>
        <img
          src={pattent_rings}
          style={{ width: '530px', height: '129px', flexShrink: '0' }}
        />
      </StyledImgGrid>
    </StyledContainer>
  );
};
