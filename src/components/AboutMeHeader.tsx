import React from 'react';
import { Stack, Grid, Typography, styled, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
const StyledHeading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    color: 'var(--white, #fff)',
    fontSize: '72px',
    fontFamily: 'Space Grotesk',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '72px' /* 100% */,
    letterSpacing: '-2.045px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    color: 'var(--white, #fff)',
    fontFeatureSettings: 'clig off, liga off',
    fontFamily: 'Space Grotesk',
    fontSize: '88px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '88px',
    letterSpacing: '-2.5px',
  },
}));

const StyledUnderline = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    width: '402px',
    height: '6px',
    background: 'var(--green, #4ee1a0)',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '492px',
    height: '6px',
    background: 'var(--green, #4ee1a0)',
  },
}));

const StyledBody = styled(Typography)`
  color: var(--grey, #d9d9d9);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body */
  font-family: Space Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const AboutMeHeader = () => {
  const theme = useTheme();
  const tabletSizeView = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const introString = "Nice to\nmeet you! I'm";

  if (tabletSizeView) {
    return (
      <Stack
        sx={{
          marginTop: '127px',
          width: '706px',
          height: '303px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          whiteSpace="pre-wrap"
          textAlign="start"
          sx={{ width: '443px', height: '233px', flexShrink: 0 }}
        >
          <StyledHeading>{introString}</StyledHeading>
          <Stack>
            <StyledHeading>Adam Keyes.</StyledHeading>
            <StyledUnderline />
          </Stack>
        </Grid>
        <Grid sx={{ width: '445px', marginTop: '37px' }}>
          <StyledBody
            sx={{ textWrap: 'wrap', textAlign: 'left', letterSpacing: 0 }}
          >
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </StyledBody>
        </Grid>
      </Stack>
    );
  }

  return (
    <Stack
      whiteSpace="nowrap"
      sx={{
        marginTop: '127px',
        width: '706px',
        height: '303px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <StyledHeading>Nice to meet you!</StyledHeading>
      <Grid item display="flex">
        <StyledHeading sx={{ marginRight: '17px' }}>I'm</StyledHeading>
        <Stack>
          <StyledHeading>Adam Keyes.</StyledHeading>
          <StyledUnderline />
        </Stack>
      </Grid>
      <Grid sx={{ width: '445px', marginTop: '37px' }}>
        <StyledBody sx={{ textWrap: 'wrap', textAlign: 'left' }}>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </StyledBody>
      </Grid>
    </Stack>
  );
};
