'use client'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Divider, TextField, FormHelperText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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

import { Dayjs } from 'dayjs';
import Chip from '@mui/material/Chip';
import { createNewAppt } from '../components/db-calls';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import CalandarDialog from '../components/calendar-dialog';
import {DialogContentText} from '@mui/material';

import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; // ⬅️ add this
import { cacheLife } from 'next/dist/server/use-cache/cache-life';


export default function Booking() {
    const [selectedType, setSelectedType] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedPhoneNumber, setPhoneNumber] = useState('');
    const [selectedComments, setComments] = useState('');
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [submissionFailed, setSubmissionFailed] = useState<boolean>(false);
    const [files, setFiles] = useState<File[]>([]);
    const [open, setOpen] = React.useState(false);
    const [submitLoading, setSubmitLoading] = React.useState(false)
    const [finalDialogOpen, setFinalDialogOpen] = React.useState(false);
    const [databaseConnSuccessfull, setDBC] = React.useState(false);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitLoading(true);

        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());

        // add additional veriication and type checking here
        if (selectedDate !== null) {
            try {
                await createNewAppt(selectedDate.toDate(), formJson.Type, formJson.Comments, formJson.PhoneNumber, formJson.name, files);
            } catch (err) {
                console.error(err)
            } finally {
                setSubmitLoading(false);
                setOpen(false);
                setFinalDialogOpen(true);
                setDBC(true);
            }

        } else {
            setSubmitLoading(false);
            setOpen(false);
            setDBC(false);
        }
    };

    const handleDelete = (index: number) => {
        if (files) {
            setFiles((files) => files.filter((_, i) => i !== index));
        }
    };

    const handleClickOpen = () => {
        if (selectedType.length != 0 && selectedPhoneNumber.length != 0 && validateTel(selectedPhoneNumber) && selectedName.length != 0 && selectedDate != null) {
            setSubmissionFailed(false);
            setOpen(true);
        }
        else {
            setSubmissionFailed(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFinalDialogClose = () => {
        setFinalDialogOpen(false);
        window.location.replace('/');
    };


    interface durations {
        [key: string]: number;
        acrylic: number
        gel: number
    }

    const typeDurations: durations = {
        acrylic: 2,  //2 hour time period for acrylic set 
        gel: 1.5,    // 1.5 hour time slot for gel set 
    };

    //changes the type
    const handleTypeChange = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value as string);
    };

    const validateTel = (tel: string): boolean => {
        const re = /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
        return re.test(tel);
    }


    return (
        <Container maxWidth="lg">
            <Typography className='bigHeader'>
                ENTER BOOKING DETAILS
            </Typography>
            <Divider sx={{ color: alpha(`${theme.palette.secondary.main}`, 0.5), mt: 2 }} />

            <Box>
                <Stack direction={'column'} spacing={4} display={'flex'} >
                    <form onSubmit={handleSubmit} id="booking-form">
                        <Box maxWidth={400}>
                            <Typography className='header'>Name</Typography>
                            <Typography className='subHeader'>
                                Please enter your name
                            </Typography>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Name"
                                variant="filled"
                                name="name"
                                fullWidth
                                value={selectedName}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setSelectedName(event.target.value);
                                }}
                                error={selectedName.length == 0 && submissionFailed}
                                helperText={!selectedName && submissionFailed ? 'This field is required' : ''}
                            />
                        </Box>
                        <Box maxWidth={400}>
                            <Typography className='header'>Phone Number</Typography>
                            <Typography className='subHeader'>
                                Your phone number will be used to coordinate your appointment
                            </Typography>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Phone Number"
                                variant="filled"
                                name="PhoneNumber"
                                value={selectedPhoneNumber}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setPhoneNumber(event.target.value);
                                }}
                                error={(selectedPhoneNumber.length == 0 || !validateTel(selectedPhoneNumber)) && submissionFailed}
                                helperText={(selectedPhoneNumber.length == 0 || !validateTel(selectedPhoneNumber)) && submissionFailed ? 'Please enter a valid phone number' : ''}
                                fullWidth
                                type='tel'
                            />
                        </Box>
                        <Box maxWidth={400}>
                            <Typography className='header'>What type of nails?</Typography>
                            <Typography className='subHeader'>
                                Enter the type of nails you are looking for here
                            </Typography>

                            <Box sx={{ minWidth: 120 }}>

                                <FormControl fullWidth>
                                    <InputLabel sx={{
                                        color: selectedType.length == 0 && submissionFailed ? '#d32f2f' : 'rgba(0, 0, 0, 0.6)',
                                        '&.Mui-focused': {
                                            color: selectedType.length == 0 && submissionFailed ? '#d32f2f' : 'primary.main',
                                        }
                                    }} id="nail-type-label">Type</InputLabel>
                                    <Select
                                        labelId="nail-type-label"
                                        id="nail-type-select"
                                        value={selectedType}
                                        label="Type"
                                        onChange={handleTypeChange}
                                        error={selectedType.length == 0 && submissionFailed}
                                        name="Type"
                                        fullWidth
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    bgcolor: '#f5f4f0',
                                                },
                                            },
                                            MenuListProps: {
                                                sx: {
                                                    '& .MuiMenuItem-root .MuiTouchRipple-root span': {
                                                        backgroundColor: '#d8a2ad',
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem value="gel">Gel</MenuItem>
                                        <MenuItem value="acrylic">Acrylic</MenuItem>
                                    </Select>
                                    {selectedType.length == 0 && submissionFailed && <FormHelperText sx={{ color: '#d32f2f' }}>This field is required</FormHelperText>}
                                </FormControl>

                            </Box>
                        </Box>
                        <Box maxWidth={400}>
                            <Typography className='header'>When will your appointment be?</Typography>
                            <Typography className='subHeader'>
                                Enter your appointment date and time here
                            </Typography>
                            {(selectedType.length == 0) ?
                                <Button variant="contained" disabled>
                                    Choose type of nails before date & time
                                </Button>
                                :
                                <CalandarDialog setSelectedDate={setSelectedDate} selectedType={selectedType} submissionFailed={submissionFailed} selectedDate={selectedDate} />
                            }
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
                                value={selectedComments}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setComments(event.target.value);
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography className='header'>Inspiration</Typography>
                            <Typography className='subHeader'>
                                Upload any inspo pics here
                            </Typography>
                            <Button
                                variant="contained"
                                component="label"
                            >
                                UPLOAD FILE
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="inspo pics"
                                    hidden
                                    multiple // mult pics if needed
                                    onChange={(e) => {
                                        const files = e.target.files;
                                        console.log(`files: ${files}`)
                                        setFiles(files ? Array.from(files) : [])
                                    }}
                                />
                            </Button>
                            <Box sx={{ mt: 2 }}>
                                <Stack direction="column" spacing={1}>
                                    {files ? Array.from(files).map((img, index) => (
                                        <div key={index}>
                                            <Chip label={img.name} onDelete={() => handleDelete(index)} />
                                        </div>
                                    )) : <div></div>}
                                </Stack>
                            </Box>
                        </Box>

                    </form>
                </Stack>

                <Box maxWidth={400}>
                    <Dialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        fullWidth={true}
                    >
                        <DialogTitle sx={{ m: 0, fontWeight: 800 }} id="customized-dialog-title">
                            Review Appointment Details
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={(theme) => ({
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: theme.palette.grey[500],
                            })}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            <Stack spacing={2}>
                                <Stack spacing={1} direction={'row'}>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Name:
                                    </Typography>
                                    <Typography>
                                        {selectedName}
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction={'row'}>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Phone Number:
                                    </Typography>
                                    <Typography>
                                        {selectedPhoneNumber}
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction={'row'}>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Type of Nails:
                                    </Typography>
                                    <Typography>
                                        {selectedType}
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} direction={'row'}>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Date & Time:
                                    </Typography>
                                    <Typography>
                                        {selectedDate?.toString()}
                                    </Typography>
                                </Stack>
                                {selectedComments.length !== 0 && <Stack spacing={1} direction={'row'}>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Comments:
                                    </Typography>
                                    <Typography>
                                        {selectedComments}
                                    </Typography>
                                </Stack>}
                                {files.length !== 0 &&
                                    <div>
                                        <Typography sx={{ fontWeight: 800, mb: 1 }}>
                                            Inspirations Pics:
                                        </Typography>
                                        <Stack spacing={1} direction={'column'} sx={{ ml: 1 }}>
                                            {Array.from(files).map((img, index) => (
                                                <Typography key={index}>
                                                    • {img.name}
                                                </Typography>
                                            ))}
                                        </Stack>
                                    </div>
                                }

                            </Stack>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                Cancel
                            </Button>
                            <Button type="submit" form="booking-form" loading={submitLoading}>Confirm Booking</Button>

                        </DialogActions>
                    </Dialog>
                    {/* make this button look differnt */}
                    <Button sx={{ fontFamily: 'starborn', fontWeight: 400, fontSize: 16, color: '#f5f4f0', backgroundColor: '#ca8190', mt: 3 }}
                        endIcon={<AutoAwesomeIcon />}
                        onClick={handleClickOpen}
                        variant="contained">
                        Book Appointment
                    </Button>
                    {submissionFailed && <FormHelperText sx={{ color: '#d32f2f' }}>Please fill out required fields</FormHelperText>}
                </Box>

                <Dialog
                    open={finalDialogOpen}
                    onClose={handleFinalDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {databaseConnSuccessfull? "Appointment successfully created. You'll recieve a text message with your appointment details." : "Appointment creation failed, please try again"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleFinalDialogClose}>Ok</Button>
                    </DialogActions>
                </Dialog>

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
