import React, { useRef, useEffect } from 'react';
import { getListRecords } from './services/AirtableServices';
import { Grid, Stack } from '@mui/material';

import { PortfolioHeader } from './containers/PortfolioHeader/PortfolioHeader';
import { PortfolioAboutMe } from './containers/PortfolioAboutMe/PortfolioAboutMe';
import { PortfolioExperience } from './containers/PortfolioExperience/PortfolioExperience';
import { PortfolioProjects } from './containers/PortfolioProjects/PortfolioProjects';
import { PortfolioFooter } from './containers/PortfolioFooter/PortfolioFooter';
import image_profile_desktop from './assets/image_profile_desktop.png';
import pattern_circle from './assets/pattern_circle.svg';
import './index.css';

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
    <>
      <Grid
        container
        flexDirection="column"
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '39px 165px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <PortfolioHeader />
        <Grid
          sx={{
            position: 'absolute',
            marginLeft: '665px',
            top: '0',
          }}
        >
          <img
            src={image_profile_desktop}
            style={{ width: '444.876px', height: '720px', flexShrink: '0' }}
          />
        </Grid>
        <Stack
          sx={{
            width: '129px',
            height: '129px',
            marginLeft: '484px',
            zIndex: '2',
            position: 'absolute',
            top: '521px',
            marginLeft: '601px',
          }}
        >
          <img
            src={pattern_circle}
            style={{ width: '129px', height: '129px', flexShrink: '0' }}
          />
        </Stack>
        <PortfolioAboutMe onContactMeOnClick={handleContactMeOnClick} />
        <PortfolioExperience />
        <PortfolioProjects onContactMeOnClick={handleContactMeOnClick} />
      </Grid>
      <PortfolioFooter portfolioFooterEnd={portfolioFooterEnd} />
    </>
  );
};
