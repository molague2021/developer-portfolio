import React from 'react';
import {
  Grid,
  Stack,
  Typography,
  styled,
  Button,
  useTheme,
} from '@mui/material';
import { PortfolioProjectCard } from '../../components/PortfolioProjectCard';
import { portfolioProjects } from '../../constants/portfolioProjects';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyleProjectsHeading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    color: 'var(--white, #fff)',
    fontSize: '40px',
    fontFamily: 'Space Grotesk',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '40px' /* 100% */,
    letterSpacing: '-1.136px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    color: 'var(--white, #fff)',
    fontSize: '72px',
    fontFamily: 'Space Grotesk',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '72px' /* 100% */,
    letterSpacing: '-2.045px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    color: 'var(--white, #fff)',
    fontFeatureSettings: 'clig off, liga off',
    fontFamily: 'Space Grotesk',
    fontSize: '88px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '88px',
    letterSpacing: '-2.5px',
  },
}));

const GridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '345px',
    height: '40px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '706px',
    height: '72px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    height: '88px',
  },
}));

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
    padding: 0;
  }
  &.MuiButton-root:hover {
    color: #4ee1a0;
  }
`;

const GridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '345px',
    marginTop: '80px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '708px',
    marginTop: '100px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    maxHeight: '1767px',
    marginTop: '140px',
  },
}));

const PortfolioGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    width: '345px',
    maxHeight: '2828px',
    marginTop: '40px',
    gap: '40px 20px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '708px',
    maxHeight: '1314px',
    marginTop: '60px',
    gap: '60px 20px',
  },
  [theme.breakpoints.between('md', 'xl')]: {
    width: '1110px',
    height: '1599px',
    marginTop: '80px',
  },
}));

interface PortfolioProjectsProps {
  onContactMeOnClick: () => void;
}

export const PortfolioProjects = ({
  onContactMeOnClick,
}: PortfolioProjectsProps) => {
  const theme = useTheme();
  const mobileSizeView = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  return (
    <GridContainer container flexShrink="0">
      <GridItem item display="flex" justifyContent="space-between">
        <StyleProjectsHeading>Projects</StyleProjectsHeading>
        <Grid item display="flex">
          <Stack
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
              width: '120px',
              gap: '10px',
            }}
          >
            <StyledButton onClick={onContactMeOnClick}>CONTACT ME</StyledButton>
            <StyledButtonUnderline />
          </Stack>
        </Grid>
      </GridItem>

      <PortfolioGridContainer
        container
        flexShrink="0"
        justifyContent="space-between"
      >
        {portfolioProjects.map((project, index) => {
          return <PortfolioProjectCard index={index} project={project} />;
        })}
      </PortfolioGridContainer>
    </GridContainer>
  );
};
