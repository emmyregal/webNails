"use client"

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Calandar from '../components/date-time-picker';
import TypeSelect from '../components/selector';
import { TextField } from '@mui/material';



export default function Booking() {
    return (
        <Container maxWidth="lg">
            <Typography marginTop={8} fontSize={20}>
                Booking
            </Typography>
            <Grid container spacing={3}>
                <Grid size={4}>
                    <Calandar />
                </Grid>
                <Grid size={4}>
                    <TypeSelect />
                </Grid>
                <Grid size={4}>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Multiline"
                            multiline
                            maxRows={8}
                            variant="filled"
                        />
                </Grid>
            </Grid>
        </Container>
    );
}