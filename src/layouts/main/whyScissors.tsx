import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { GradientBar } from '../../components/uiComponent/UIComponets';
import { CustomIcon } from '../../images/customIcon';
import { DataIcon } from '../../images/DataIcon';
import { QrIcon } from '../../images/qrIcon';
import { UrlIcon } from '../../images/urlIcon';

export const WhyScissors: React.FC = () => {
  return (
    <>
      <Container style={{ marginTop: '4rem' }}>
        <Grid container textAlign='start' spacing={4}>
          <Grid container item xs={4}>
            <Grid item xs={2}>
              <GradientBar />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='h5' gutterBottom>
                <b>
                  Why choose <span style={{ color: '#005AE2' }}> Scissors </span>
                </b>
              </Typography>
              <Typography>
                Scissors is the hub of everything that has to do with your link management. We
                shorten your URLs, allow you creating custom ones for your personal, business, event
                usage. Our swift QR code creation, management and usage tracking with advance
                analytics for all of these is second to none.{' '}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={8} spacing={4}>
            <Grid item xs={6} direction='column' spacing={4}>
              <Grid>
                <UrlIcon />
                <Typography variant='h6' gutterBottom>
                  URL Shortening
                </Typography>
                <Typography gutterBottom>
                  Scissor allows you to shorten URLs of your business, events. Shorten your URL at
                  scale, URL redirects.
                </Typography>
              </Grid>
              <Grid>
                <QrIcon />
                <Typography variant='h6' gutterBottom>
                  QR Codes
                </Typography>
                <Typography gutterBottom>
                  Generate QR codes to your business, events. Bring your audience and customers to
                  your doorstep with this scan and go solution.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} direction='column'>
              <Grid>
                <CustomIcon />
                <Typography variant='h6' gutterBottom>
                  Custom URLs
                </Typography>
                <Typography gutterBottom>
                  With Scissor, you can create custom URLs, with the length you want! A solution for
                  socials and businesses.
                </Typography>
              </Grid>

              <Grid>
                <DataIcon />
                <Typography variant='h6' gutterBottom>
                  Data Analytics
                </Typography>
                <Typography gutterBottom>
                  Receive data on the usage of either your shortened URL, custom URLs or generated
                  QR codes. Embedded to monitor progress.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
