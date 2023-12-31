import React from 'react';
import { Grid, Stack, styled, useTheme, useMediaQuery } from '@mui/material';
import image_profile_desktop from '../assets/image_profile_desktop.png';
import image_profile_tablet from '../assets/image-profile-tablet.webp';
import image_profile_mobile from '../assets/image-profile-mobile.webp';
import pattern_circle from '../assets/pattern_circle.svg';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '174px',
  },
}));

const StyledImageGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    position: 'absolute',
    width: '174px',
    marginLeft: '0px',
    top: '-92px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    position: 'absolute',
    marginLeft: '410px',
    top: '-60px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    position: 'absolute',
    marginLeft: '665px',
    top: '-71',
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '174.207px',
    height: '383px',
    flexShrink: '0',
    zIndex: '2',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '322px',
    height: '607px',
    flexShrink: '0',
  },
  [theme.breakpoints.between('md', 'xl')]: {
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
  [theme.breakpoints.between('xs', 'sm')]: {
    top: '162px',
    marginLeft: '205px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    top: '418px',
    marginLeft: '655px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    top: '455px',
    marginLeft: '601px',
  },
}));

export const PortfolioProfileImage = () => {
  const theme = useTheme();

  const mobileSizeView = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const tabletSizeView = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <StyledGrid sx={{ position: 'relative' }}>
      <StyledImageGrid container>
        <StyledImg
          src={
            tabletSizeView
              ? image_profile_tablet
              : mobileSizeView
              ? image_profile_mobile
              : image_profile_desktop
          }
        />
      </StyledImageGrid>
      <StyledStack>
        <img
          src={pattern_circle}
          style={{ width: '129px', height: '129px', flexShrink: '0' }}
        />
      </StyledStack>
    </StyledGrid>
  );
};
