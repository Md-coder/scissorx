import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { PropertySection } from '../../components/uiComponent/UIComponets';

export const Properties: React.FC = () => {
  return (
    <>
      <Container style={{ backgroundColor: '#F9FBFD' }}>
        <PropertySection>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Typography variant='h4'>
                <b>
                  {' '}
                  One Stop. <br />
                  Four <span style={{ color: '#005AE2' }}>Possibilities.</span>
                </b>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5'>
                <b> 3M</b>
              </Typography>
              <Typography>Active users</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5'>
                <b> 60M </b>
              </Typography>
              <Typography>
                Links & QR <br />
                codes created
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5'>
                <b> 1B </b>
              </Typography>
              <Typography>
                Clicked & Scanned <br />
                connections
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5'>
                <b> 300K</b>
              </Typography>
              <Typography>App integrations</Typography>
            </Grid>
          </Grid>
        </PropertySection>
      </Container>
    </>
  );
};
