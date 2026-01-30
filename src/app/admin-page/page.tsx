'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import prisma from "@/lib/prisma";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Appointment } from '../../../generated/prisma/client';
import { getAppointments } from '../components/db-calls';


export default function AdminPage() {
    const [appts, setAppointments] = useState<Appointment[]>([]);
    useEffect(() => {
        const fetchAppointments = async () => {
            const appts = await getAppointments()
            setAppointments(appts);
        }

        fetchAppointments()
    }, [])


    const getRows = () => {
        return appts.map((appt, index) => ({
            id: index,
            name: appt.name,
            type: appt.type,
            date: appt.date,
            info: appt.id
        }))
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', minWidth: 160 },
        {
            field: 'date',
            headerName: 'Date',
            type: 'date',
            minWidth: 160,
        },
        {
            field: 'type',
            headerName: 'Type',
            type: 'string',
            minWidth: 160,
        },
        {
            field: 'info',
            headerName: 'More Info',
            flex: 1,
            renderCell: (params) => (
                <Link href={`/admin-page/view?appointment=${params.value}`}>
                    More Info
                </Link>
            ),
        },
    ];

    const paginationModel = { page: 0, pageSize: 5 };


    return (
        <Container maxWidth='xl'>
            <Box sx={{ margin: 2.5 }}>
                <Button variant='outlined' href="admin-page">
                    Appointments
                </Button>
                <Button variant='outlined' href="admin-page/calendar" sx={{ml: 2}}>
                    Calendar
                </Button>
            </Box>

            <Container maxWidth='lg'>
                <Paper sx={{ height: 400, width: '100%', mt: 1.5 }}>
                    <DataGrid
                        rows={getRows()}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection={false}
                        sx={{ padding: 1.5 }}
                    />
                </Paper>
            </Container>
        </Container>
    );


}


