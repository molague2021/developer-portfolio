import React from 'react';
import {
  Grid,
  styled,
  Stack,
  Typography,
  Icon,
  Link,
  SvgIcon,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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
  &.MuiLink-root {
    color: white;
    fill: white;
  }
  &.MuiLink-root:hover {
    color: #4ee1a0;
    fill: #4ee1a0;
  }
`;

export const SocialMedia = () => {
  return (
    <>
      <StyledLink
        href="https://github.com/molague2021"
        target="_blank"
        rel="noopener"
      >
        <Icon>
          <GitHubIcon />
        </Icon>
      </StyledLink>
      <StyledLink
        href="https://www.frontendmentor.io/profile/molague2021"
        target="_blank"
        rel="noopener"
      >
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23">
            <path d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z" />
          </svg>
        </SvgIcon>
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/martin-olague-4a0890203/"
        target="_blank"
        rel="noopener"
      >
        <Icon>
          <LinkedInIcon />
        </Icon>
      </StyledLink>
      <StyledLink
        href="https://twitter.com/molague23"
        target="_blank"
        rel="noopener"
      >
        <Icon>
          <TwitterIcon />
        </Icon>
      </StyledLink>
    </>
  );
};
