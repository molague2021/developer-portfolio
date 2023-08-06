import React from 'react';
import { Grid, styled, Stack, Typography } from '@mui/material';

import { portfolioExperienceList } from './constants/portfolioExperience';
import pattent_rings from '../../assets/pattern_rings.svg';

const StyledDivider = styled('div')`
	width: 1110px;
	height: 1px;
	flex-shrink: 0;
	background: white;
`;

const StyledHeading = styled(Typography)`
	color: white;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Heading (L) */
	font-family: Space Grotesk;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 56px; /* 116.667% */
	letter-spacing: -1.5px;
`;

const StyledBody = styled(Typography)`
	color: white;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body */
	font-family: Space Grotesk;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px; /* 155.556% */
`;

export const PortfolioExperience = () => {
	return (
		<Grid
			container
			alignContent='space-between'
			sx={{ height: '327px', position: 'relative' }}
		>
			<StyledDivider />
			<Grid
				display='flex'
				flexWrap='wrap'
				justifyContent='space-between'
				alignContent='space-between'
				sx={{ maxWidth: '1110px', height: '254px' }}
			>
				{portfolioExperienceList.map((experience) => {
					return (
						<Grid
							item
							display='flex'
							flexDirection='column'
							alignItems='flex-start'
							justifyContent='center'
							gap='14px'
							sx={{ minWidth: '345px', height: '98px' }}
						>
							<StyledHeading>{experience.name}</StyledHeading>
							<StyledBody>{`${experience.years} Years Experience`}</StyledBody>
						</Grid>
					);
				})}
			</Grid>
			<Grid
				sx={{
					width: '530px',
					height: '129px',
					flexShrink: '0',
					position: 'absolute',
					marginTop: '252px',
					marginLeft: '979px',
				}}
			>
				<img
					src={pattent_rings}
					style={{ width: '530px', height: '129px', flexShrink: '0' }}
				/>
			</Grid>
		</Grid>
	);
};
