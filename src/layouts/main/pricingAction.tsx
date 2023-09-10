import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { HomeSection } from '../../components/uiComponent/UIComponets';

export const PricingAction: React.FC = () => {
  return (
    <>
      <Container>
        <HomeSection>
          <Box display='flex' alignContent='center' justifyContent='center'>
            <Button variant='outlined' style={{ marginRight: '10px' }}>
              Get custom Pricing
            </Button>
            <Button variant='contained'>Select pricing</Button>
          </Box>
        </HomeSection>
      </Container>
    </>
  );
};
