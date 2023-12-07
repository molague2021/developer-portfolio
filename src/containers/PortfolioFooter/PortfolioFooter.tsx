import React, { RefObject } from 'react';
import { Stack, Grid, styled } from '@mui/material';

import { ContactMeSection } from './ContactMeSection';
import { FooterAboutMeSection } from './FooterAboutMeSection';

const StyledDiv = styled('div')(({ theme }) => ({
  background: '#242424',
  [theme.breakpoints.between('xs', 'sm')]: {
    maxWidth: '375px',
    height: '834px',
    flexShrink: 0,
    //overflowX: 'hidden',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '768px',
    height: '806px',
    flexShrink: 0,
    overflowX: 'hidden',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1440px',
    height: '675px',
    margin: '0 auto',
    padding: '39px 162px',
    overflow: 'hidden',
    flexShrink: 0,
  },
}));

const StyledContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    flexShrink: 0,
    flexDirection: 'row',
    maxWidth: '375px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexShrink: 0,
    flexDirection: 'row',
    maxWidth: '768px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    maxWidth: '1440px',
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
