import React from 'react';
import { GradientBar, HomeSection } from '../../components/uiComponent/UIComponets';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface IFaqs {
  title: string;
  text: string;
}

const faqsText: IFaqs[] = [
  {
    title: 'How does URL shortening work?',
    text: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination',
  },
  {
    title: 'Is it necessary to create an account to use the URL shortening service?',
    text: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination',
  },
  {
    title: 'Are the shortened links permanent? Will they expire?',
    text: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination',
  },
  {
    title: 'Are there any limitations on the number of URLs I can shorten?',
    text: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination',
  },
  {
    title: 'Can I customize the shortened URLs to reflect my brand or content?',
    text: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination',
  },
  {
    title: 'Can I track the performance of my shortened URLs?',
    text: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination',
  },
];

export const Faq: React.FC = () => {
  return (
    <>
      <Container>
        <HomeSection>
          <Grid container spacing={4}>
            <Grid item xs={12} textAlign='center'>
              <Box display='flex' justifyContent='center'>
                <GradientBar />

                <Typography
                  variant='h4'
                  textAlign='center'
                  gutterBottom
                  style={{ paddingLeft: '10px' }}
                >
                  <b>FAQs</b>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box display='flex' justifyContent='center' alignItems='center' mt='40px'>
            <Box width='80%'>
              {faqsText.map((value, index) => (
                <AccordionFaqs title={value.title} text={value.text} key={index} />
              ))}
            </Box>
          </Box>
        </HomeSection>
      </Container>
    </>
  );
};

const AccordionFaqs: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
