import React from 'react';
import { Stack, Grid, Typography, styled, Icon, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import icon_frontend_mentor from '../../assets/icon_frontend_mentor.svg';

const StyledTypography = styled(Typography)`
  font-family: Space Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.444px;
`;

const StyledIcon = styled(Icon)`
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  .MuiLink-root {
    color: white;
  }
  .MuiLink-root:hover {
    color: #4ee1a0;
  }
`;

export const PortfolioHeader = () => {
  return (
    <Grid item>
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography fontFamily="Space Grotesk">
          adamkeyes
        </StyledTypography>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          sx={{ minWidth: '200px', zIndex: 9, marginRight: '29.51px' }}
        >
          <StyledLink
            href="https://github.com/molague2021"
            target="_blank"
            rel="noopener"
          >
            <Icon>
              <GitHubIcon />
            </Icon>
          </StyledLink>
          <Link>
            <StyledIcon>
              <img
                src={icon_frontend_mentor}
                style={{
                  width: '25px',
                  height: '22px',
                  flexShrink: 0,
                  fill: 'var(--white, #FFF)',
                }}
              />
            </StyledIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/martin-olague-4a0890203/"
            target="_blank"
            rel="noopener"
          >
            <StyledIcon>
              <LinkedInIcon />
            </StyledIcon>
          </Link>
          <Link
            href="https://twitter.com/molague23"
            target="_blank"
            rel="noopener"
          >
            <StyledIcon>
              <TwitterIcon />
            </StyledIcon>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
