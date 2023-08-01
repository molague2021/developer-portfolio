import React from 'react';
import {
  Stack,
  Grid,
  Typography,
  styled,
  Icon,
  Link,
  Divider,
  Button,
} from '@mui/material';

import image_profile_desktop from '../../assets/image_profile_desktop.png';

const StyledOval = styled('div')`
  width: 530px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  border: 1px solid var(--white, #fff);
`;

const StyledHeading = styled(Typography)`
  color: var(--white, #fff);
  font-feature-settings: 'clig' off, 'liga' off;

  font-family: Space Grotesk;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: -2.5px;
`;

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

const StyledUnderline = styled('div')`
  width: 492px;
  height: 6px;
  background: var(--green, #4ee1a0);
`;

const StyledContactMe = styled(Typography)`
  &.MuiTypography-root {
    color: var(--white, #fff);
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    letter-spacing: 2.286px;
  }
`;

const StyledButtonUnderline = styled('div')`
  width: 120px;
  height: 2px;
  background: var(--green, #4ee1a0);
`;

export const PortfolioAboutMe = () => {
  return (
    <>
      <Grid
        container
        flexDirection="column"
        sx={{
          width: '530px',
          height: '129px',
          position: 'absolute',
          top: '133px',
          left: '-100px',
        }}
      >
        <StyledOval />
        <StyledOval sx={{ marginTop: '12px' }} />
        <StyledOval sx={{ marginTop: '25px' }} />
        <StyledOval sx={{ marginTop: '37px' }} />
        <StyledOval sx={{ marginTop: '49px' }} />
      </Grid>
      <Stack
        whiteSpace="nowrap"
        sx={{ marginTop: '127px', width: '706px', height: '303px' }}
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
          <StyledBody sx={{ textWrap: 'wrap' }}>
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </StyledBody>
        </Grid>
      </Stack>
      <Stack
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          marginTop: '66px',
          width: '120px',
          gap: '10px',
        }}
      >
        <StyledContactMe>CONTACT ME</StyledContactMe>
        <StyledButtonUnderline />
      </Stack>
      {/* <Grid sx={{ position: 'absolute' }}>
        <img
          src={image_profile_desktop}
          style={{ width: '444.876px', height: '720px', flexShrink: '0' }}
        />
      </Grid> */}
    </>
  );
};
