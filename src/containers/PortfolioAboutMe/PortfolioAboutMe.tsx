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
import pattern_circle from '../../assets/pattern_circle.svg';
import pattent_rings from '../../assets/pattern_rings.svg';

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

const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: white;
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    letter-spacing: 2.286px;
    text-wrap: nowrap;
  }
  &.MuiButton-root:hover {
    color: #4ee1a0;
  }
`;

const StyledButtonUnderline = styled('div')`
  width: 120px;
  height: 2px;
  background: var(--green, #4ee1a0);
`;

interface PortfolioAboutMeProps {
  onContactMeOnClick: () => void;
}

export const PortfolioAboutMe = ({
  onContactMeOnClick,
}: PortfolioAboutMeProps) => {
  return (
    <Grid sx={{ height: '688px', position: 'relative' }}>
      <Grid
        container
        sx={{
          width: '530px',
          height: '129px',
          flexShrink: '0',
          position: 'absolute',
          marginTop: '62px',
          left: -265,
        }}
      >
        <img
          src={pattent_rings}
          style={{ width: '530px', height: '129px', flexShrink: '0' }}
        />
      </Grid>
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
      <Grid item display="flex" sx={{ marginTop: '66px' }}>
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{
            width: '120px',
            gap: '10px',
          }}
        >
          <StyledButton onClick={onContactMeOnClick}>CONTACT ME</StyledButton>
          <StyledButtonUnderline />
        </Stack>
      </Grid>
    </Grid>
  );
};
