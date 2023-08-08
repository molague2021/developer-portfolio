import React from 'react';
import { Stack, Grid } from '@mui/material';

import { ContactMeSection } from './ContactMeSection';
import { FooterAboutMeSection } from './FooterAboutMeSection';

export const PortfolioFooter = () => {
  return (
    <div style={{ height: '675px', flexShrink: 0, background: '#242424' }}>
      <Grid
        container
        flexDirection="column"
        sx={{
          maxWidth: '1150px',
          margin: '0 auto',
          padding: '84px 28px 92px',
          textAlign: 'center',
        }}
      >
        <ContactMeSection />
        <FooterAboutMeSection />
      </Grid>
    </div>
  );
};
