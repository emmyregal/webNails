import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/material';


const logoGrey = '#f5f4f0'
const logoLightPink = '#f5f4f0'
const logoPink = '#d8a2ad'
const logoDarkPink = '#b76074'


const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: logoGrey
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'quicksand',
          fontWeight: 800,
          // fontSize: '25px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'quicksand',
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          color: logoGrey
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'quicksand',
          fontWeight: 800,
          // backgroundColor: 'red'
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'quicksand',
          fontWeight: 800,
          fontSize: '13.5px',
          // color: logoGrey,
        },
        contained: {
          backgroundColor: '#ca8190',
          color: logoGrey,

          '&:hover': {
            backgroundColor: logoDarkPink,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'quicksand',
          fontWeight: 800,
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: logoPink,
          fontFamily: 'quicksand',
        }
      },
      variants: [
        {
          props: { className: 'bigHeader' },
          style: {
            fontFamily: 'starborn',
            // marginBottom: 4,
            marginTop: 12,
            fontSize: 30
          }
        },
        {
          props: { className: 'header' },
          style: {
            fontFamily: 'malibu',
            marginBottom: 4,
            marginTop: 30,
            fontSize: 18,
          }
        },
        {
          props: { className: 'subHeader' },
          style: {
            fontFamily: 'quicksand',
            fontWeight: 800,
            marginBottom: 15,
            fontSize: 15,
            color: alpha(logoPink, 0.65)
          }
        }
      ]
    }
  },
  palette: {
    primary: {
      main: logoPink
    },
    secondary: {
      main: logoDarkPink
    },
    error: {
      main: '#d32f2f'
    }
  }
});

export default theme;