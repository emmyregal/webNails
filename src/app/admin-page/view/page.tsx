import prisma from "@/lib/prisma";
import { Typography, Container, Breadcrumbs, Link, Paper } from "@mui/material";


export default async function Page({
  searchParams,
}: {
  searchParams: { appointment?: string };
}) {

    const { appointment } = await searchParams

    const appt = await prisma.appointment.findUnique({
        where: {
            id: appointment
        }
    })
    if (appt) {
        return (
            <Container maxWidth='xl'>
                <Breadcrumbs aria-label="breadcrumb" sx={{padding: 2.5}}>
                    <Link underline="hover" color="inherit" href="/admin-page">
                        Back to Appointments
                    </Link>
                </Breadcrumbs>

                    <Paper sx={{mb: 2}}>
                        <Typography>
                            Client Name: {appt.name}
                        </Typography>
                        <Typography>
                            Appt Date: {appt.date.toString()}
                        </Typography>
                        <Typography>
                            Nail Type: {appt.type}
                        </Typography>
                        <Typography>
                            Phone Number: {appt.type}
                        </Typography>
                        <Typography sx={{fontWeight: 800,fontSize: 21,  mb: 2, mt: 2  }}>
                            Appointment Details:
                        </Typography>
                        <Typography>
                            Comments: {appt.comments}
                        </Typography>
                        {/* get and display images from s3 urls stored in db */}
                    </Paper>
            </Container>
        );
    } else {
        return ( //shouldnt happen if database working correctly
            <Typography>
                Error loading appointment
            </Typography>
        )
    }

}