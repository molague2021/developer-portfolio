import React, { useRef, useEffect } from 'react';
import { getListRecords } from './services/AirtableServices';
import { Grid, Stack, styled, useTheme, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { PortfolioHeader } from './containers/PortfolioHeader/PortfolioHeader';
import { PortfolioAboutMe } from './containers/PortfolioAboutMe/PortfolioAboutMe';
import { PortfolioExperience } from './containers/PortfolioExperience/PortfolioExperience';
import { PortfolioProjects } from './containers/PortfolioProjects/PortfolioProjects';
import { PortfolioFooter } from './containers/PortfolioFooter/PortfolioFooter';
import { PortfolioProfileImage } from './components/PortfolioProfileImage';
import image_profile_desktop from './assets/image_profile_desktop.png';
import image_profile_tablet from './assets/image-profile-tablet.webp';
import pattern_circle from './assets/pattern_circle.svg';
import './index.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 769,
      xl: 8000,
    },
  },
});

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '375px',
    margin: '0 auto',
    padding: '20px 16px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '768px',
    margin: '0 auto',
    padding: '29px 30px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1440px',
    margin: '0 auto',
    padding: '39px 162px',
    textAlign: 'center',
    overflow: 'hidden',
  },
}));

export const App = () => {
  const portfolioFooterEnd = useRef(null);

  useEffect(() => {
    getListRecords();
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (portfolioFooterEnd.current?.scrollIntoView) {
        portfolioFooterEnd.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    }, 300);
  };

  const handleContactMeOnClick = () => {
    scrollToBottom();
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledGrid container flexDirection="column">
        <PortfolioHeader />
        <PortfolioProfileImage />

        <PortfolioAboutMe onContactMeOnClick={handleContactMeOnClick} />
        <PortfolioExperience />
        <PortfolioProjects onContactMeOnClick={handleContactMeOnClick} />
      </StyledGrid>
      <PortfolioFooter portfolioFooterEnd={portfolioFooterEnd} />
    </ThemeProvider>
  );
};
