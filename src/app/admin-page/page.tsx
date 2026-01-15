'use server'

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import prisma from "@/lib/prisma";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default async function AdminPage() {
    const appts = await prisma.appointment.findMany()

    return (
        <Container maxWidth='xl'>
            <Breadcrumbs aria-label="breadcrumb" sx={{padding: 2.5}}>
                <Link underline="hover" color="inherit" href="/admin-page">
                    Appointments
                </Link>
            </Breadcrumbs>

        {appts.map((appt, index) => (
            <Paper key={index} sx={{mb: 2}}>
                <Button href={`/admin-page/view?appointment=${appt.id}`}>
                    <Typography>
                        Client Name: {appt.name}
                    </Typography>
                    <Typography>
                        Appt Date: {appt.date.toString()}
                    </Typography>
                    <Typography>
                        Nail Type: {appt.type}
                    </Typography>
                
                </Button>
            </Paper>
        ))}
        </Container>
    );
}
