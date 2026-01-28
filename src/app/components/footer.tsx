import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Grid, Typography, Container, IconButton, Divider, Link } from '@mui/material';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import { alpha } from '@mui/material';
import theme from '../theme';


export default function Footer() {

    return (
        <footer>
            <Box sx={{mt: 10}}>
            <Divider sx={{ color: alpha(`${theme.palette.secondary.main}`, 0.3)}} />
            <Container maxWidth='lg'>
                <Grid container sx={{mt: 3}}>
                    <Grid size={4}>
                        <div>
                            <Image
                                src="/pics/name-logo.png"
                                alt="name-logo"
                                width={125}
                                height={110}
                            />
                            <Typography sx={{color: '#b76074'}}>
                                Nails by Adriana
                            </Typography>
                            <IconButton sx={{color: '#b76074', ml: -1}} href='https://www.instagram.com/nailsbyadri.ana/'>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid size={8}>
                        <Typography sx={{color: '#b76074'}}>
                            Having troubles with this site? Feel free to reach out to the deveopers at: 
                        </Typography>
                        <Link href="mailto:nailsdevs@gmail.com">nailsdevs@gmail.com</Link>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </footer>
    );
}
