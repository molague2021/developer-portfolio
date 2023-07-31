import React from 'react';
import { Stack, Grid, Typography, styled, Icon, Link } from '@mui/material';

const StyledOval = styled('div')`
	width: 530px;
	height: 80px;
	border-radius: 100%;
	border: 1px solid var(--white, #fff);
`;

export const PortfolioAboutMe = () => {
	return (
		<Grid container sx={{ marginTop: '25px' }}>
			<StyledOval />
			<StyledOval />
			<StyledOval />
			<StyledOval />
			<StyledOval />

			<Stack>Picture</Stack>
		</Grid>
	);
};
