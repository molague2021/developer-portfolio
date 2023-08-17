import React from 'react';
import { Grid, Stack, Typography, styled, Button } from '@mui/material';

interface CardProps {
  index: number;
  children: React.ReactNode;
}

export const Card = ({ index, children }: CardProps) => {
  return (
    <Stack
      key={index}
      display="flex"
      justifyContent="space-between"
      sx={{ width: '540px', height: '487px' }}
    >
      {children}
    </Stack>
  );
};
