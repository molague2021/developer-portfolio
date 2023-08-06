import React from 'react';
import { Grid, Stack, Typography, styled } from '@mui/material';

const StyleProjectsHeading = styled(Typography)`
	color: white;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Heading (XL) */
	font-family: Space Grotesk;
	font-size: 88px;
	font-style: normal;
	font-weight: 700;
	line-height: 88px; /* 100% */
	letter-spacing: -2.5px;
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

export const PortfolioProjects = () => {
	return (
		<Grid
			container
			sx={{
				//height: '1767px',
				marginTop: '140px',
			}}
		>
			<Grid
				display='flex'
				justifyContent='space-between'
				sx={{ width: '100%' }}
			>
				<StyleProjectsHeading>Projects</StyleProjectsHeading>
				<Grid item display='flex'>
					<Stack
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='flex-start'
						sx={{
							width: '120px',
							gap: '10px',
						}}
					>
						<StyledContactMe>CONTACT ME</StyledContactMe>
						<StyledButtonUnderline />
					</Stack>
				</Grid>
			</Grid>

			<Grid sx={{ width: '100%' }}>Project Images</Grid>
		</Grid>
	);
};
