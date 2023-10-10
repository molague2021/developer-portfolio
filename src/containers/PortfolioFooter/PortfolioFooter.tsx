import React, { RefObject } from 'react';
import { Stack, Grid, styled } from '@mui/material';

import { ContactMeSection } from './ContactMeSection';
import { FooterAboutMeSection } from './FooterAboutMeSection';

const StyledDiv = styled('div')(({ theme }) => ({
  background: '#242424',
  [theme.breakpoints.between('sm', 'md')]: {
    height: '806px',
    flexShrink: 0,
    overflowX: 'hidden',
  },
  [theme.breakpoints.up('xl')]: {
    height: '675px',
    flexShrink: 0,
  },
}));

const StyledContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    flexShrink: 0,
    flexDirection: 'row',
    maxWidth: '768px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '768px',
    margin: '0 auto',
    padding: '84px 28px 92px',
    textAlign: 'center',
    flexDirection: 'column',
  },
}));

interface PortfolioFooterProps {
  portfolioFooterEnd: RefObject<HTMLDivElement> | null | undefined;
}

export const PortfolioFooter = ({
  portfolioFooterEnd,
}: PortfolioFooterProps) => {
  return (
    <StyledDiv>
      <StyledContainer ref={portfolioFooterEnd} container>
        <ContactMeSection />
        <FooterAboutMeSection />
      </StyledContainer>
    </StyledDiv>
  );
};
