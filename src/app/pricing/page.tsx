"use client"

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Calandar from '../components/date-time-picker';
import TypeSelect from '../components/selector';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { PriceCard1 } from '../components/card';
import { PriceCard2 } from '../components/card';
import { PriceCard3 } from '../components/card';
import { PriceCard4 } from '../components/card';
import PriceGrid from '../components/grid';

//60 for short
//65 for medium 
//70 for long
//no design fee
//5 dollars for >2 charms
//45 for gel polish w builder gel
//10 deposit required
export default function Pricing() {
    return (
        <PriceGrid />
    );
}