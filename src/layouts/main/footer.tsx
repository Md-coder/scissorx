import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Logo } from './style';
import { LogoBlack } from '../logoBlack ';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { HomeSection } from '../../components/uiComponent/UIComponets';

export const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <HomeSection>
          <Grid container xs={12} spacing={6}>
            <Grid container item md={2}>
              <Box>
                <Grid container>
                  <Grid item xs={12}>
                    <Logo>
                      <LogoBlack />
                    </Logo>
                  </Grid>
                  <Grid item xs={3}>
                    <TwitterIcon />
                  </Grid>
                  <Grid item xs={3}>
                    <InstagramIcon />
                  </Grid>
                  <Grid item xs={3}>
                    <LinkedInIcon />
                  </Grid>
                  <Grid item xs={3}>
                    <FacebookIcon />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item container md={10}>
              <Grid item container xs={12}>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    Why Scissor ?
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      Scissor 101 <br />
                      Integrations & API <br />
                      Pricing
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    solutions
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      Social Media <br /> Digital Marketing <br /> Customer Service For Developers
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    products
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      Link Management <br /> QR Codes <br /> Link-in-bio
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    company
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      About Scissor <br /> Careers <br /> Partners <br /> Press <br /> Contact{' '}
                      <br /> Reviews
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    Resources
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      Blog <br /> Resource <br /> Library <br /> Developers <br /> App Connectors{' '}
                      <br /> Support <br /> Trust Center <br /> Browser Extension <br /> Mobile App
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    Features
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      Branded Links <br /> Mobile Links <br /> Campaign Management & <br />{' '}
                      Analytics <br /> QR Code generation
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant='h6' textAlign='left' mb={2}>
                    Legal
                  </Typography>
                  <Box>
                    <Typography textAlign='left'>
                      Privacy Policy <br /> Cookie Policy <br /> Terms of Service <br /> Acceptable
                      Use Policy <br /> Code of Conduct
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography textAlign='right'>Term of Service | Security | Scissor 2023</Typography>
        </HomeSection>
      </Container>
    </>
  );
};
