import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box marginTop={5}>
        <Grid container spacing={5}>
          <Grid size={6} >
            <Paper elevation={4} sx={{height: 500}}>
              <Typography sx={{fill: 'true'}}>paper</Typography>
            </Paper>
          </Grid>
          <Grid size={6} >
            <Paper elevation={4}>
              <Typography>paper</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
