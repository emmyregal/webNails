'use client'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Calandar from '../components/date-time-picker';
import TypeSelect from '../components/selector';
import { Button, CardActionArea, Divider, TextField, FormHelperText } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { alpha } from '@mui/material';
import theme from '../theme';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createNewAppt } from '../components/db-calls';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; // ⬅️ add this



//todo: 
// input validation
// submitting actually submits & sends to db
// times are blocked out on the calanadar

type NailType = 'acrylic' | 'gel';


export default function Booking() {
    // const [selectedType, setSelectedType] = useState<NailType | "">('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [inputValid, setInputValid] = useState<boolean>(false);
    const [files, setFiles] = useState<File[]>([]);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateInput();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        console.log(`form json: ${JSON.stringify(formJson)}`)

        const formatedDate = new Date(formJson.Date)
        createNewAppt(formatedDate, formJson.Type, formJson.Comments, formJson.PhoneNumber, files);
    };

    const handleDelete = (index: number) => {
        if (files) {
            setFiles((files) => files.filter((_, i) => i !== index));
        }
    };


    const validateInput = () => {
        if (selectedType.length == 0) {
            console.log(`selected type: ${selectedType}`)
            setInputValid(true)
        } else {
            setInputValid(false)
        }
    }

    interface durations {
        [key: string]: number;
        acrylic: number
        gel: number
    }

    const typeDurations: durations = {
        acrylic: 2,  //2 hour time period for acrylic set 
        gel: 1.5, // 1.5 hour time slot for gel set 
    };

    //changes the type
    const handleTypeChange = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value as string);
    };

    const nineAM = dayjs().set('hour', 9).startOf('hour');
    const sevenPM = dayjs().set('hour', 19).startOf('hour');

    const renderCalandar = () => {
        if (selectedType.length == 0) {
            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker
                            disabled
                            label={`Choose type of nails before date & time`}
                            value={selectedDate}
                        />

                    </DemoContainer>
                </LocalizationProvider>
            )
        } else {
            return (
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker
                                label={`Choose date & time (duration: ${typeDurations[selectedType]} hr)`}
                                minTime={nineAM}
                                maxTime={sevenPM}
                                onChange={(newValue) => setSelectedDate(newValue)}
                                value={selectedDate}
                                name='Date'
                            // disablePast
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    {/* display the date time in a nice way: */}
                    {/* <Chip label={`Chosen Date & Time:`}  /> */}
                </div>
            )
        }
    }


    return (
        <Container maxWidth="lg">
            <Typography className='bigHeader'>
                Enter Booking Details
            </Typography>
            <Divider sx={{ color: alpha(`${theme.palette.secondary.main}`, 0.5), mt: 2 }} />

            <Box>
                <Stack direction={'column'} spacing={4} display={'flex'} >
                    <form onSubmit={handleSubmit} id="booking-form">
                        <Box maxWidth={400}>
                            <Typography className='header'>What type of nails?</Typography>
                            <Typography className='subHeader'>
                                Enter the type of nails you are looking for here
                            </Typography>
                            {/* <TypeSelect onChange={handleTypeChange} /> */}

                            <Box sx={{ minWidth: 120 }}>

                                <FormControl fullWidth>
                                    <InputLabel sx={{
                                        color: inputValid ? '#d32f2f' : 'rgba(0, 0, 0, 0.6)',
                                        '&.Mui-focused': {
                                            color: inputValid ? '#d32f2f' : 'primary.main',
                                        }
                                    }} id="nail-type-label">Type</InputLabel>
                                    <Select
                                        labelId="nail-type-label"
                                        id="nail-type-select"
                                        value={selectedType}
                                        label="Type"
                                        onChange={handleTypeChange}
                                        error={inputValid}
                                        name="Type"
                                        fullWidth
                                    >
                                        <MenuItem value="gel">Gel</MenuItem>
                                        <MenuItem value="acrylic">Acrylic</MenuItem>
                                    </Select>
                                    {inputValid && <FormHelperText sx={{ color: '#d32f2f' }}>This field is required</FormHelperText>}
                                </FormControl>

                            </Box>
                        </Box>
                        <Box maxWidth={400}>
                            <Typography className='header'>When will your appointment be?</Typography>
                            <Typography className='subHeader'>
                                Enter your appointment date and time here
                            </Typography>
                            {/* <Calandar/> */}
                            {/* <Calandar duration={typeDurations[selectedType]} /> */}

                            {renderCalandar()}
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
                                name="Comments"
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
                                    name="inspo pics"
                                    hidden
                                    multiple // mult pics if needed
                                    onChange={(e) => {
                                        const files = e.target.files;
                                        console.log(`files: ${files}`)
                                        setFiles(files? Array.from(files) : [])
                                    }}
                                />
                            </Button>
                            <Stack direction="row" spacing={1}>
                                {files? Array.from(files).map((img, index) => (
                                    <div key={index}>
                                        <Chip label={img.name} onDelete={() => handleDelete(index)} />
                                    </div>
                                )) : <div></div>}
                                
                            </Stack>
                        </Box>
                        <Box maxWidth={400}>
                            {/* TODO: phone number formatting validation */}
                            <Typography className='header'>Phone Number</Typography>
                            <Typography className='subHeader'>
                                Your phone number will be used to coordinate your appointment
                            </Typography>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Phone Number"
                                variant="filled"
                                name="PhoneNumber"
                                fullWidth
                            />
                        </Box>
                    </form>
                </Stack>
                <Divider sx={{ color: alpha(`${theme.palette.secondary.main}`, 0.5), mt: 2, mb: 4 }} />
                <Box maxWidth={400}>

                    {/* make this button look differnt */}
                    <Button sx={{ color: alpha('#000000', 0.75) }} endIcon={<CheckCircleIcon />} type="submit" form="booking-form" variant="contained">Book Appointment</Button>
                </Box>

                <Box mt={6}>
          <Typography className="header">Secure Payment</Typography>
          {/*CHANGE OUT "YOUR_CLIENT_ID for adriannas number once she fills out her paypal thing" */}
          {/* <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID", "enable-funding": "venmo" }}>
            <PayPalButtons style={{ layout: "vertical" }} />
          </PayPalScriptProvider> */}
        </Box>
            </Box>
        </Container>
    );

}

// want to add a section at the bottom of everypage w adriana and dev info


