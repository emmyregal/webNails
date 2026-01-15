// 'use server'
// import { Typography, Container, Breadcrumbs, Link } from "@mui/material";
// import prisma from "@/lib/prisma";


// type ApptProps = {
//   appt_id: string;
// };


// export default async function AppointmentView({appt_id}: ApptProps) {
//     const appt = await prisma.appointment.findUnique({
//         where: {
//             id: appt_id
//         }
//     })

//     if (appt) {
//         return (
//             <Container maxWidth='xl'>
//                 <Breadcrumbs aria-label="breadcrumb" sx={{padding: 2.5}}>
//                     <Link underline="hover" color="inherit" href="/admin-page">
//                         Appointments
//                     </Link>
//                 </Breadcrumbs>

//                     <Paper sx={{mb: 2}}>
//                         <Typography>
//                             Client Name: {appt.name}
//                         </Typography>
//                         <Typography>
//                             Appt Date: {appt.date.toString()}
//                         </Typography>
//                         <Typography>
//                             Nail Type: {appt.type}
//                         </Typography>
//                     </Paper>
//             </Container>
//         );
//     } else {
//         return ( //shouldnt happen if database working correctly
//             <Typography>
//                 Error loading appointment
//             </Typography>
//         )
//     }
// }
    