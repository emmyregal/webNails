import MyCalendar from "@/app/components/big-calandar"
import { Container, Box, Button } from "@mui/material"

export default function AdminCalendar() {
    return (
        <Container maxWidth='xl'>
            <Box sx={{ margin: 2.5 }}>
                <Button variant='outlined' href="/admin-page">
                    Appointments
                </Button>
                <Button variant='outlined' href="admin-page/calendar" sx={{ml: 2}} >
                    Calendar
                </Button>
            </Box>
            <Box sx={{ mt: 3, ml: 2.5 }}>
                <MyCalendar bgEvent={[]} admin={true}/>
            </Box>
        </Container>

    )
}