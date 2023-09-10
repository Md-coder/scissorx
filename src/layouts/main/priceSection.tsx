import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { GradientBar, HeroSection } from '../../components/uiComponent/UIComponets';

export const PriceSection: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Grid container spacing={4}>
          <Grid item xs={12} textAlign='center'>
            <Box display='flex' justifyContent='center'>
              <GradientBar />
              <Box>
                <Typography variant='h4' textAlign='center' gutterBottom>
                  <b>
                    A<span style={{ color: 'blue' }}> price perfect </span>
                    for your needs
                  </b>
                </Typography>
                <Typography>
                  From catering for your personal, business, event, socials needs, you can be <br />{' '}
                  rest assured we have you in mind in our pricing.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </HeroSection>
    </>
  );
};
