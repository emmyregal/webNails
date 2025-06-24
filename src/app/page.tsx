import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import QuiltedImageList from './components/image-list'


export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box marginTop={4}>
        <Grid container spacing={5}>
          <Grid size={6} >
            <Paper elevation={4} sx={{height: '100%', backgroundColor: '#f5f4f0'}}>
                <Box justifyContent={'center'} alignItems="center" display="flex" marginBottom={5}>
              <QuiltedImageList/>
              </Box>
            </Paper>
          </Grid>
          <Grid size={6} >
            <Paper elevation={4} sx={{height: '100%', backgroundColor: '#f5f4f0'}}>
                <Stack direction='column' justifyContent='center' alignItems='center' display='flex'>
                  <Typography sx={{textAlign: 'center'}}>Been here before? Log in here: </Typography>
                  <Button variant="outlined" sx={{justifyContent: 'center'}}>Log in</Button>
                  <Typography sx={{textAlign: 'center'}}>New here? Sign up for an account: </Typography>
                  <Button variant="outlined" sx={{justifyContent: 'center'}}>Sign up</Button>
                  </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
