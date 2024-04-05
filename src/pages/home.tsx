import React from 'react';
import { MainHeader } from '../layouts/main/header';
import { LandingSection } from '../layouts/main/hero';
import { ImageSection } from '../layouts/main/imageSection';
import { PriceSection } from '../layouts/main/priceSection';
import { Properties } from '../layouts/main/properties';
import { WhyScissors } from '../layouts/main/whyScissors';
import { PriceCards } from '../layouts/main/priceCards';
import { PricingAction } from '../layouts/main/pricingAction';
import { InputFieldSection } from '../layouts/main/inputSection';
import { Faq } from '../layouts/main/faq';
import { LinkOptimization } from '../layouts/main/linkOptimization';
import { Footer } from '../layouts/main/footer';
export const HomePage: React.FC = () => {
  return (
    <>
      <MainHeader />;
      <LandingSection />
      <ImageSection />
      <Properties />
      <WhyScissors />
      <PriceSection />
      <PriceCards />
      <PricingAction />
      <InputFieldSection />
      <Faq />
      <LinkOptimization />
      <Footer />
    </>
  );
};
