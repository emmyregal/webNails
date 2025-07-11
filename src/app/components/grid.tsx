import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PriceCard1 from './card';
import PriceCard2 from './card';
import PriceCard3 from './card';
import PriceCard4 from './card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#E792CB',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function PriceGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={5.5}>
          <PriceCard1/>
        </Grid>
        <Grid size={5.5}>
          <PriceCard2/>
        </Grid>
        <Grid size={5.5}>
          <PriceCard3/>
        </Grid>
        <Grid size={5.5}>
          <PriceCard4/>
        </Grid>
      </Grid>
    </Box>
  );
}