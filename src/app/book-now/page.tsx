"use client"

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Calandar from '../components/date-time-picker';
import TypeSelect from '../components/selector';
import { Button, CardActionArea, Divider, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { alpha } from '@mui/material';
import theme from '../theme';

//todo: 
// input validation
// submitting actually submits & sends to db
// times are blocked out on the calanadar


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
            <Typography marginTop={4} fontSize={23} fontFamily={"cursive"}>
                Enter Booking Details
            </Typography>
            <Divider sx={{ color: alpha(`${theme.palette.secondary.main}`, 0.5), mt: 2, mb: 4 }} />

            <Stack direction={'column'} spacing={4} display={'flex'} >
                <Box maxWidth={400}>
                    <Typography 
                        fontFamily={"Trattatello"} 
                        className='header'>What type of nails?</Typography>
                    <Typography className='subHeader'>
                        Enter the type of nails you are looking for here
                    </Typography>
                    <TypeSelect onChange={handleTypeChange} />
                </Box>
                <Box maxWidth={400}>
                    <Typography className='header'>When will your appointment be?</Typography>
                    <Typography className='subHeader'>
                        Enter your appointment date and time here
                    </Typography>
                    <Calandar duration={typeDurations[selectedType]} />
                </Box>

                <Box maxWidth={400}>
                    <Typography className='header'>Additional comments</Typography>
                    <Typography className='subHeader'>
                        Leave any comments about your appointment here
                    </Typography>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Comments"
                        multiline
                        maxRows={8}
                        variant="filled"
                        fullWidth
                    />
                </Box>
                <Box>
                    <Typography className='header'>Inspiration</Typography>
                    <Typography className='subHeader'>
                        Upload any inspo pics here
                    </Typography>
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
                <Divider sx={{ color: alpha(`${theme.palette.secondary.main}`, 0.5), mt: 2, mb: 4 }} />
                <Box maxWidth={400}>
                    {/* make this button look differnt */}
                    <Button variant="outlined" sx={{ justifyContent: 'center' }}>Book Appointment</Button>
                </Box>
            </Stack>
        </Container>
    );
}

// want to add a section at the bottom of everypage w adriana and dev info