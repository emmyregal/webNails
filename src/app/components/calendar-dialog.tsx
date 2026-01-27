'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MyCalendar from './big-calandar';
import RenderCalandar from './date-time-picker';
import dayjs, { Dayjs } from 'dayjs';


export default function CalandarDialog({ setSelectedDate, selectedType, submissionFailed, selectedDate }: { setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs | null>>, selectedType: string, submissionFailed: boolean, selectedDate: Dayjs | null }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log('DIALOG CURR DATE ==== ')
        setOpen(false);
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

    const getCurrEvent = () => {
        const currEvent = []
        if (selectedDate !== null) {
            currEvent[0] = {
                id: 0,
                title: 'Your Appointment',
                start: selectedDate.toDate(),
                end: dayjs(selectedDate)
                    .add(typeDurations[selectedType], 'hours')
                    .toDate(),
            }
        }
        return currEvent;
    }


    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
                Choose Date & Time
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'lg'}
                fullWidth={true}
            >
                <DialogTitle></DialogTitle>
                <DialogContent>
                    <Box sx={{ height: 575 }}>
                        {open && (<MyCalendar bgEvent={getCurrEvent()} />)}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ alignItems: 'center' }}>
                    <Box sx={{ mr: 'auto', minWidth: '30%', alignItems: 'center', mb: 1 }}>
                        <RenderCalandar setSelectedDate={setSelectedDate} selectedType={selectedType} submissionFailed={submissionFailed} selectedDate={selectedDate} />
                    </Box>
                    <Button variant='contained' onClick={handleClose}>Choose</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


// dialog alternate:

// 'use client'

// import { Drawer, Box, IconButton, Button } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close'
// import { Calendar } from 'react-big-calendar'
// import React, { useState } from 'react'
// import MyCalendar from './big-calandar'

// type Props = {
//     open: boolean
//     onClose: () => void
//     events: any[]
//     localizer: any
// }

// export default function CalendarDialog() {
//     const [open, setOpen] = React.useState(false);

//     const toggleDrawer = (newOpen: boolean) => () => {
//         setOpen(newOpen);
//     };

//     return (
//         <div>
//             <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//             <Drawer
//                 anchor="right"
//                 open={open}
//                 onClose={toggleDrawer(false)}
//                 keepMounted
//             >
//                 <Box
//                     sx={{
//                         width: { xs: '100vw', md: 900 },
//                         height: '100vh',
//                         p: 2,
//                         display: 'flex',
//                         flexDirection: 'column',
//                     }}
//                 >
//                     {/* Header */}
//                     <Box display="flex" justifyContent="space-between" alignItems="center">
//                         <h2>Calendar</h2>
//                         <IconButton onClick={toggleDrawer(false)}>
//                             <CloseIcon />
//                         </IconButton>
//                     </Box>

//                     {/* Calendar container */}
//                     <Box sx={{ flex: 1, minHeight: 0 }}>
//                         {open && (
//                             <MyCalendar />
//                         )}
//                     </Box>
//                 </Box>
//             </Drawer>
//         </div>
//     )
// }
