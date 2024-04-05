import React from 'react';
import { InputSection } from '../../components/uiComponent/UIComponets';
import { Button, Typography } from '@mui/material';

export const LinkOptimization: React.FC = () => {
  return (
    <>
      <InputSection>
        <Typography variant='h4' color='white' mb={2}>
          Revolutionizing Link Optimization
        </Typography>
        <Button variant='contained'>Get started</Button>
      </InputSection>
    </>
  );
};
