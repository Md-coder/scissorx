import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { HeroSection } from "../../components/uiComponent/UIComponets";

export const LandingSection: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center" gutterBottom>
              <b>
                Optimize Your Online Experience with Our <br /> Advanced{" "}
                <span style={{ color: "blue" }}> URL Shortening </span>
                Solution
              </b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Personalize your shortened URLs to align with your brand identity. Utilize custom
              slugs,
              <br />
              branded links, and domain customization options to reinforce your brand presence and{" "}
              <br />
              enhance user engagement.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              style={{ marginBottom: "48px" }}
            >
              <Box
                display="flex"
                width="17%"
                alignContent="center"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Button color="primary" variant="contained" style={{ borderRadius: "25px" }}>
                    Sign Up
                  </Button>
                </Box>
                <Box>
                  <Button color="primary">Learn more</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </HeroSection>
    </>
  );
};
