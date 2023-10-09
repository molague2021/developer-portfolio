import React, { RefObject } from 'react';
import { Stack, Grid, styled } from '@mui/material';

import { ContactMeSection } from './ContactMeSection';
import { FooterAboutMeSection } from './FooterAboutMeSection';

const StyledDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    height: '806px',
    width: '1136px',
    flexShrink: 0,
  },
  [theme.breakpoints.up('md')]: {
    height: '675px',
    flexShrink: 0,
  },
}));

const StyledContainer = styled(Grid)(({ theme }) => ({
  background: '#242424',
  [theme.breakpoints.between('sm', 'md')]: {
    width: '768px',
    height: '806px',
    flexShrink: 0,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '768px',
    margin: '0 auto',
    padding: '84px 28px 92px',
    textAlign: 'center',
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
      <StyledContainer
        ref={portfolioFooterEnd}
        container
        flexDirection="column"
      >
        <ContactMeSection />
        <FooterAboutMeSection />
      </StyledContainer>
    </StyledDiv>
  );
};
