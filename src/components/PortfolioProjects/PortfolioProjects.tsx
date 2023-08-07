import React from 'react';
import { Grid, Stack, Typography, styled } from '@mui/material';

import { portfolioProjects } from '../../constants/portfolioProjects';

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

const StyledProjectName = styled(Typography)`
	color: white;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Heading (M) */
	font-family: Space Grotesk;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px; /* 133.333% */
`;

const StyledProjectSkills = styled(Typography)`
	color: white;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body */
	font-family: Space Grotesk;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px; /* 155.556% */
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
			flexShrink='0'
			sx={{
				height: '1767px',
				marginTop: '140px',
			}}
		>
			<Grid
				item
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

			<Grid
				container
				flexShrink='0'
				sx={{ width: '100%', height: '1599px', marginTop: '80pxs' }}
			>
				{portfolioProjects.map((project) => {
					console.log(project);
					return (
						<Stack sx={{ width: '540px', height: '487px' }}>
							<StyledProjectName>{project.projectName}</StyledProjectName>
							<Grid display='flex'>
								{project?.projectSkills.map((skill) => {
									return <StyledProjectSkills>{skill}</StyledProjectSkills>;
								})}
							</Grid>
						</Stack>
					);
				})}
			</Grid>
		</Grid>
	);
};
