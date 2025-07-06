"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from 'next/link'


import ProfileMenu from './menu';



const pages = [{ id: 1, name: 'Book Now', link: '/book-now' },
{ id: 2, name: 'Sets', link: '/sets' },
{ id: 3, name: 'About', link: '/about' },
{ id: 4, name: 'Pricing', link: '/pricing'}];

function ResponsiveAppBar() {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button disableRipple>
            <Link href='/'>
              <Image
                src="/pics/name-logo.png"
                alt="name-logo"
                width={125}
                height={110}
              />
            </Link>
          </Button>
          <Box sx={{ marginLeft: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <Button
                key={page.id}
                sx={{ marginRight: 1.5, my: 1, color: 'white', display: 'block' }}
              >
                <Link href={page.link}>
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <ProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
