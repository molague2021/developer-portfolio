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

const StyledTextfield = styled(TextField)({
  //     `
  //     color: white !important;
  //     font-family: Space Grotesk;
  //     font-size: 16px;
  //     font-style: normal;
  //     font-weight: 500;
  //     line-height: 26px; /* 162.5% */
  //     letter-spacing: -0.222px;
  //     opacity: 0.5;
  //   `;

  root: {
    '& .MuiFormLabel-root': {
      color: 'red', // or black
    },
  },
});

const SUBTITLE = `I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.`;

export const ContactMeSection = () => {
  return (
    <Grid
      item
      display="flex"
      justifyContent="space-between"
      sx={{ width: '1110px', height: '327px', flexShrink: 0 }}
    >
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        gap="36px"
        sx={{ width: '445px', height: '208px' }}
      >
        <StyledTitle>Contact</StyledTitle>
        <StyledSubtitle>{SUBTITLE}</StyledSubtitle>
      </Stack>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        gap="36px"
        sx={{ width: '445px', height: '208px' }}
      >
        <StyledTextfield
          color="primary"
          id="name-textfield"
          placeholder="NAME"
          variant="standard"
          size="small"
          sx={{
            '&.MuiTextField-root': { color: 'white' },
            '&.MuiInputBase-root-MuiInput-root': { color: 'white' },
            width: '445px',
          }}
          InputLabelProps={{ sx: { ...{ color: 'white' } } }}
          InputProps={{ sx: { ...{ borderBottom: '1px solid white' } } }}
        />
        <StyledTextfield
          id="email-textfield"
          label="Email"
          variant="standard"
        />
        <StyledTextfield
          id="message-textfield"
          label="Message"
          variant="standard"
        />
      </Stack>
    </Grid>
  );
};
