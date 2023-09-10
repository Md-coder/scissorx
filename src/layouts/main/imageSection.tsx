import { Grid } from '@mui/material';
import React from 'react';
import { HomeSection } from '../../components/uiComponent/UIComponets';
import { CardImage } from '../../images/cardImage';
import { CircularImage } from '../../images/circularImage';

export const ImageSection: React.FC = () => {
  return (
    <>
      <HomeSection>
        <Grid container>
          <Grid item xs={12}>
            <CardImage />
          </Grid>
          <Grid item xs={12}>
            <CircularImage />
          </Grid>
        </Grid>
      </HomeSection>
    </>
  );
};
