import React from 'react';
import { Stack, Grid, Typography, styled, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledHeading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    color: 'var(--white, #fff)',
    fontSize: '40px',
    fontFamily: 'Space Grotesk',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '40px' /* 100% */,
    letterSpacing: '-1.136px',
    textAlign: 'center',
  },
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

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop: '331px',
    width: '343px',
    height: '182px',
    position: 'relative',
    zIndex: 2,
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    marginTop: '127px',
    width: '706px',
    height: '303px',
    position: 'relative',
    zIndex: 2,
  },
}));

const StyledUnderline = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '225px',
    height: '4px',
    background: 'var(--green, #4ee1a0)',
  },
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

const StyledBody = styled(Typography)(({ theme }) => ({
  color: `var(--Grey, #d9d9d9)`,
  fontFeatureSettings: `'clig' off, 'liga' off`,
  [theme.breakpoints.between('xs', 'sm')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '26px',
    textAlign: 'center' /* 155.556% */,
  },
  [theme.breakpoints.between('sm', 'xl')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '28px',
    textAlign: 'left' /* 155.556% */,
  },
}));

export const AboutMeHeader = () => {
  const theme = useTheme();
  const mobileSizeView = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const tabletSizeView = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const introString = "Nice to\nmeet you! I'm";

  if (tabletSizeView) {
    return (
      <StyledStack>
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
      </StyledStack>
    );
  }

  return (
    <StyledStack whiteSpace="nowrap">
      <StyledHeading>Nice to meet you!</StyledHeading>
      <Grid
        item
        display="flex"
        sx={{ justifyContent: mobileSizeView ? 'center' : '' }}
      >
        <StyledHeading sx={{ marginRight: mobileSizeView ? '10px' : '17px' }}>
          I'm
        </StyledHeading>
        <Stack>
          <StyledHeading>Adam Keyes.</StyledHeading>
          <StyledUnderline />
        </Stack>
      </Grid>
      <Grid
        sx={{
          width: mobileSizeView ? '343px' : '445px',
          marginTop: mobileSizeView ? '20px' : '37px',
        }}
      >
        <StyledBody sx={{ textWrap: 'wrap' }}>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </StyledBody>
      </Grid>
    </StyledStack>
  );
};
