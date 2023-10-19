import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import {
  HeroContainer,
  HeroContainerContent,
  HeroContainerOverlay,
  HomeSectionContainer,
  InputSectionContainer,
  PropertySectionContainer,
} from './style';

export const HeroSection: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <HeroContainer>
        <HeroContainerOverlay>
          <HeroContainerContent>{children}</HeroContainerContent>
        </HeroContainerOverlay>
      </HeroContainer>
    </>
  );
};

export const InputSection: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <InputSectionContainer>
        <HeroContainerOverlay>
          <HeroContainerContent>{children}</HeroContainerContent>
        </HeroContainerOverlay>
      </InputSectionContainer>
    </>
  );
};
export const HomeSection: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <HomeSectionContainer>{children}</HomeSectionContainer>
    </>
  );
};
export const PropertySection: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <PropertySectionContainer>{children}</PropertySectionContainer>
    </>
  );
};

export const GradientBar: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: '10px',
          height: '50px',
          backgroundColor: 'black',
          backgroundImage: 'linear-gradient(black, white)',
        }}
      ></div>
    </>
  );
};
