import React from 'react';
import { Stack, Grid, Typography, styled, Icon, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import front_end_dev_logo from '../../assets/front_end_dev_logo.png';
import logo from '../../assets/logo.png';

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

export const PortfolioHeader = () => {
	return (
		<Grid container justifyContent='space-between' alignItems='center'>
			<StyledTypography fontFamily='Space Grotesk'>adamkeyes</StyledTypography>
			<Grid
				item
				display='flex'
				justifyContent='space-between'
				sx={{ minWidth: '200px' }}
			>
				<Link
					href='https://github.com/molague2021'
					target='_blank'
					rel='noopener'
				>
					<StyledIcon>
						<GitHubIcon />
					</StyledIcon>
				</Link>
				<Link>
					<StyledIcon>
						<img
							src={front_end_dev_logo}
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
					href='https://www.linkedin.com/in/martin-olague-4a0890203/'
					target='_blank'
					rel='noopener'
				>
					<StyledIcon>
						<LinkedInIcon />
					</StyledIcon>
				</Link>
				<Link
					href='https://twitter.com/molague23'
					target='_blank'
					rel='noopener'
				>
					<StyledIcon>
						<TwitterIcon />
					</StyledIcon>
				</Link>
			</Grid>
		</Grid>
	);
};
