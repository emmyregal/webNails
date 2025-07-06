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


export type NailType = 'acrylic' | 'gel';

export default function Booking() {
    const typeDurations = {
        acrylic: 2,  //2 hour time period for acrylic set 
        gel: 1.5, // 1.5 hour time slot for gel set 
    };

    const [selectedType, setSelectedType] = useState<keyof typeof typeDurations>('acrylic');

    //changes the type
    const handleTypeChange = (newType: keyof typeof typeDurations) => {
        setSelectedType(newType);
    };


    return (
        <Container maxWidth="lg">
            <Typography marginTop={8} marginBottom={4} fontSize={20}>
                Booking
            </Typography>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Stack direction={'column'} spacing={3} display={'flex'}>
                        <Box>
                            <Typography marginBottom={1}>Choose your appointment date and time</Typography>
                            <Calandar duration={typeDurations[selectedType]}/>
                        </Box>
                        <Box>
                            <Typography marginBottom={1}>Choose your type of nails</Typography>
                            <TypeSelect onChange={handleTypeChange} />
                        </Box>
                       
                       <Box width={'fill'}>
                            <Typography  marginBottom={1}>additional comments</Typography>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Comments"
                                multiline
                                maxRows={8}
                                variant="filled"
                            />
                        </Box>
                        <Box>
    <Typography marginTop={2} marginBottom={1}>upload inspo pics</Typography>
    <Button
        variant="outlined"
        component="label"
    >
        Upload File
        <input
            type="file"
            accept="image/*"
            hidden
            multiple // mult pics if needed
            onChange={(e) => {
                const files = e.target.files;
                // handle file upload logic here
                console.log(files);
            }}
        />
    </Button>
</Box>
                        <Button variant="outlined" sx={{justifyContent: 'center'}}>Submit</Button>

                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}