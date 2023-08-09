import React from 'react';
import { Stack, Grid, Typography, styled, TextField } from '@mui/material';

const StyledTitle = styled(Typography)`
	color: white;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Heading (XL) */
	&.MuiTypography-root {
		font-family: Space Grotesk;
		font-size: 88px;
		font-style: normal;
		font-weight: 700;
		line-height: 88px; /* 100% */
		letter-spacing: -2.5px;
	}
`;

const StyledSubtitle = styled(Typography)`
	width: 445px;
	color: white;
	text-align: left;
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body */
	font-family: Space Grotesk;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px; /* 155.556% */
`;

const StyledTextField = styled(TextField)`
	width: 445px;
	.MuiInput-input {
		color: white;
		padding: 0 24px 17px;
		font-family: Space Grotesk;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 26px; /* 162.5% */
		letter-spacing: -0.222px;
		opacity: 0.5;
	}
	.MuiInput-root:before {
		border-bottom: 1px solid white;
	}
	.MuiInput-root:after {
		border-bottom: 1px solid #4ee1a0;
	}
	.MuiInput-root:hover {
		border-bottom: 1px solid #4ee1a0;
	}
	.MuiInput-root:hover:after {
		border-bottom: none;
		transition: none;
	}
`;

const StyledMultiLineTextField = styled(TextField)`
	width: 445px;
	.MuiInput-input {
		color: white;
		padding: 0 24px 17px;
		font-family: Space Grotesk;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 26px; /* 162.5% */
		letter-spacing: -0.222px;
		opacity: 0.5;
	}
	.MuiInput-root:before {
		border-bottom: 1px solid white;
	}
	.MuiInput-root:after {
		border-bottom: 1px solid #4ee1a0;
	}
	.MuiInput-root:hover {
		border-bottom: 1px solid #4ee1a0;
	}
	.MuiInput-root:hover:after {
		border-bottom: none;
		transition: none;
	}
`;
const SUBTITLE = `I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.`;

export const ContactMeSection = () => {
	return (
		<Grid
			item
			display='flex'
			justifyContent='space-between'
			sx={{ width: '1110px', height: '327px', flexShrink: 0 }}
		>
			<Stack
				display='flex'
				justifyContent='center'
				alignItems='flex-start'
				gap='36px'
				sx={{ width: '445px', height: '208px' }}
			>
				<StyledTitle>Contact</StyledTitle>
				<StyledSubtitle>{SUBTITLE}</StyledSubtitle>
			</Stack>
			<Stack
				display='flex'
				justifyContent='center'
				alignItems='flex-start'
				gap='36px'
				sx={{ width: '445px', height: '208px' }}
			>
				<Stack>
					<StyledTextField
						color='primary'
						id='name-textfield'
						placeholder='NAME'
						variant='standard'
					/>
				</Stack>
				<Stack>
					<StyledTextField
						id='email-textfield'
						placeholder='EMAIL'
						variant='standard'
					/>
				</Stack>
				<Stack>
					<StyledTextField
						id='message-textfield'
						multiline
						rows={4}
						placeholder='MESSAGE'
						variant='standard'
					/>
				</Stack>
			</Stack>
		</Grid>
	);
};
