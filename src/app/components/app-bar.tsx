
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


function ResponsiveAppBar() {
  const pages = [{ id: 1, name: 'Book Now', link: '/book-now' },
  { id: 2, name: 'Sets', link: '/sets' },
  { id: 4, name: 'Pricing', link: '/pricing' }];

  return (
    <AppBar position="static">
      <Toolbar>
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
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ResponsiveAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
