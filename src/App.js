import React from 'react';
import { Grid } from '@mui/material';

import { PortfolioHeader } from './components/PortfolioHeader/PortfolioHeader';
import { PortfolioAboutMe } from './components/PortfolioHeader/PortfolioAboutMe';

export const App = () => {
	return (
		<Grid container flexDirection='column' sx={{ padding: '39px 165px 92px' }}>
			<PortfolioHeader />
			<PortfolioAboutMe />
			<div>App, Hello World!!!</div>
		</Grid>
	);
};
