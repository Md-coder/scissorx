import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { HeroSection } from '../../components/uiComponent/UIComponets';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const basicPlans: string[] = [
  'Unlimited URL Shortening',
  'Basic Link Analytics',
  'Customizable Short Links',
  'Standard Support',
  'Ad-supported',
];

const professionalPlans: string[] = [
  'Enhanced Link Analytics',
  'Custom Branded Domains',
  'Advanced Link Customization',
  'Priority Support',
  'Ad-free Experience',
];

const teamsPlans: string[] = [
  'Team Collaboration',
  'User Roles and Permissions',
  'Enhanced Security',
  'API Access',
  'Dedicated Account Manager',
];

export const PriceCards: React.FC = () => {
  return (
    <>
      <Box display='flex' justifyContent='center'>
        <Box width='80%'>
          <Grid container alignItems='center'>
            <Grid item xs={4}>
              <Card variant='outlined' sx={{ border: '1px solid #005AE2', borderRadius: '8px' }}>
                <CardContent>
                  <Typography textAlign='start' gutterBottom>
                    Basic
                  </Typography>
                  <Typography textAlign='start' gutterBottom variant='h4'>
                    <b> Free</b>
                  </Typography>
                  <Typography textAlign='start' gutterBottom>
                    Free plan for all users
                  </Typography>
                  {basicPlans.map((val: string) => (
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText>{val}</ListItemText>
                      </ListItem>
                    </List>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  height: '600px',
                  backgroundColor: '#1E3448',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                }}
              >
                <CardContent>
                  <Typography textAlign='start' gutterBottom>
                    Professional
                  </Typography>
                  <Typography textAlign='start' gutterBottom variant='h4'>
                    <b> $15/month</b>
                  </Typography>
                  <Typography textAlign='start' gutterBottom>
                    Ideal for business creators
                  </Typography>
                  {professionalPlans.map((val: string) => (
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText>{val}</ListItemText>
                      </ListItem>
                    </List>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card variant='outlined' sx={{ border: '1px solid #005AE2', borderRadius: '8px' }}>
                <CardContent>
                  <Typography textAlign='start' gutterBottom>
                    Teams
                  </Typography>
                  <Typography textAlign='start' gutterBottom variant='h4'>
                    <b> $25/month</b>
                  </Typography>
                  <Typography textAlign='start' gutterBottom>
                    share with up to 10 users
                  </Typography>
                  {teamsPlans.map((val: string) => (
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText>{val}</ListItemText>
                      </ListItem>
                    </List>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
