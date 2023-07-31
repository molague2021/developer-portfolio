import React from 'react';
import { Stack, Grid, Typography, styled, Icon, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../assets/logo.png';

const StyledTypography = styled(Typography)`
  font-family: Space Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.444px;
`;

export const PortfolioHeader = () => {
  return (
    <Grid container justifyContent="space-between">
      <StyledTypography fontFamily="Space Grotesk">adamkeyes</StyledTypography>
      <Grid item>
        <Icon>
          <GitHubIcon />
        </Icon>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="25"
            viewBox="0 0 193 25"
            fill="none"
          ></svg>
        </Icon>
        <Icon>
          <GitHubIcon />
        </Icon>
        <Icon>
          <GitHubIcon />
        </Icon>
      </Grid>
    </Grid>
  );
};
