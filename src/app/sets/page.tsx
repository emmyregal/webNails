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
import ImgList from "../components/img-grid"

export default function Sets() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="standard" gutterBottom>
                Sets
            </Typography>
            <ImgList />
        </Container>
    );
}