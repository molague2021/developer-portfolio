import React, { useState } from 'react';
import {
  Grid,
  Stack,
  Typography,
  styled,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

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

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.MuiButton-root`]: {
    color: 'white',
    fontFamily: 'Space Grotesk',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '26px' /* 162.5% */,
    letterSpacing: '2.286px',
    textWrap: 'nowrap',
  },
  [`&.MuiButton-root:hover`]: {
    color: '#4ee1a0',
  },
  [theme.breakpoints.between('xs', 'md')]: {
    width: '136px',
    padding: 0,
    height: '26px',
    flexShrink: '0',
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '345px',
    height: '398px',
    flexShrink: '0',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '342px',
    height: '398px',
    flexShrink: '0',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '540px',
    height: '487px',
  },
}));

const StyledImgGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    height: '253px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    height: '400px',
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.between('xs', 'md')]: {
    width: '345px',
    height: '253px',
    flexShrink: '0',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '540px',
    height: '400px',
    flexShrink: '0',
  },
}));

export const PortfolioProjectCard = ({ index, project }: CardProps) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const theme = useTheme();
  const desktopSizeView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledStack
      key={index}
      display="flex"
      justifyContent="space-between"
      onMouseEnter={() => desktopSizeView && setDisplayMenu(true)}
      onMouseLeave={() => desktopSizeView && setDisplayMenu(false)}
    >
      <Grid sx={{}}>
        <StyledImg src={project.projectImage} />
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
      {!desktopSizeView && (
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: '271px', height: '38px' }}
        >
          <Grid item display="flex" flexDirection="column" gap="10px">
            <StyledButton sx={{ padding: '6px 8px 6px 0' }}>
              VIEW PROJECT
            </StyledButton>
            <StyledProjectButtonUnderline sx={{ width: '138px' }} />
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
          >
            <StyledButton>VIEW CODE</StyledButton>
            <StyledProjectButtonUnderline sx={{ width: '103px' }} />
          </Grid>
        </Grid>
      )}
    </StyledStack>
  );
};
