import React, { RefObject } from 'react';
import { Stack, Grid } from '@mui/material';

import { ContactMeSection } from './ContactMeSection';
import { FooterAboutMeSection } from './FooterAboutMeSection';

interface PortfolioFooterProps {
  portfolioFooterEnd: RefObject<HTMLDivElement> | null | undefined;
}

export const PortfolioFooter = ({
  portfolioFooterEnd,
}: PortfolioFooterProps) => {
  return (
    <div style={{ height: '675px', flexShrink: 0, background: '#242424' }}>
      <Grid
        ref={portfolioFooterEnd}
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
