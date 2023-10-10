import React from 'react';
import { Grid, Stack, styled, useTheme, useMediaQuery } from '@mui/material';
import image_profile_desktop from '../assets/image_profile_desktop.png';
import image_profile_tablet from '../assets/image-profile-tablet.webp';
import pattern_circle from '../assets/pattern_circle.svg';

const StyledImageGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    position: 'absolute',
    marginLeft: '410px',
    top: '-60px',
  },
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    marginLeft: '665px',
    top: '0',
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    width: '322px',
    height: '607px',
    flexShrink: '0',
  },
  [theme.breakpoints.up('md')]: {
    width: '444.876px',
    height: '720px',
    flexShrink: '0',
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  width: '129px',
  height: '129px',
  zIndex: '2',
  position: 'absolute',
  [theme.breakpoints.between('sm', 'md')]: {
    top: '418px',
    marginLeft: '655px',
  },
  [theme.breakpoints.up('md')]: {
    top: '521px',
    marginLeft: '601px',
  },
}));

export const PortfolioProfileImage = () => {
  const theme = useTheme();
  console.log({ theme });
  const tabletSizeView = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  console.log({ tabletSizeView });
  return (
    <Grid sx={{ position: 'relative' }}>
      <StyledImageGrid container>
        <StyledImg
          src={tabletSizeView ? image_profile_tablet : image_profile_desktop}
        />
      </StyledImageGrid>
      <StyledStack>
        <img
          src={pattern_circle}
          style={{ width: '129px', height: '129px', flexShrink: '0' }}
        />
      </StyledStack>
    </Grid>
  );
};
