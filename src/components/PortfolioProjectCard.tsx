import React, { useState } from 'react';
import { Grid, Stack, Typography, styled, Button } from '@mui/material';

type Project = {
  id: number;
  projectName: string;
  projectImage: string;
  projectSkills: string[];
};
interface CardProps {
  index: number;
  project: Project;
}

const StyledProjectButtonUnderline = styled('div')`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background: var(--green, #4ee1a0);
`;

const StyledProjectName = styled(Typography)`
  color: white;
  font-feature-settings: 'clig' off, 'liga' off;
  text-align: left;

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
  margin-right: 18px;

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

const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: white;
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    letter-spacing: 2.286px;
    text-wrap: nowrap;
  }
  &.MuiButton-root:hover {
    color: #4ee1a0;
  }
`;

export const PortfolioProjectCard = ({ index, project }: CardProps) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <Stack
      key={index}
      display="flex"
      justifyContent="space-between"
      onMouseEnter={() => setDisplayMenu(true)}
      onMouseLeave={() => setDisplayMenu(false)}
      sx={{ width: '540px', height: '487px' }}
    >
      <Grid sx={{ height: '400px' }}>
        <img
          src={project.projectImage}
          style={{ width: '540px', height: '400px', flexShrink: '0' }}
        />
      </Grid>
      {displayMenu && (
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '540px',
            height: '400px',
            flexShrink: '0',
            background: 'black',
            opacity: '0.75',
            position: 'absolute',
          }}
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{ width: '138px', height: '124px' }}
          >
            <Grid item display="flex" flexDirection="column">
              <StyledButton>VIEW PROJECT</StyledButton>
              <StyledProjectButtonUnderline sx={{ width: '138px' }} />
            </Grid>
            <Grid
              item
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <StyledButton>VIEW CODE</StyledButton>
              <StyledProjectButtonUnderline sx={{ width: '103px' }} />
            </Grid>
          </Grid>
        </Grid>
      )}
      <Stack display="flex" sx={{ width: '100%' }}>
        <StyledProjectName>{project.projectName}</StyledProjectName>
        <Grid display="flex" sx={{ marginTop: '7px' }}>
          {project?.projectSkills.map((skill) => {
            return <StyledProjectSkills>{skill}</StyledProjectSkills>;
          })}
        </Grid>
      </Stack>
    </Stack>
  );
};
