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
    MuiTypography: {
        styleOverrides: {
            root: {
                color: logoPink,
                fontFamily: 'malibu'
            }
        },
        variants: [
          {
            props: {className: 'bigHeader'},
            style: {
              fontFamily: 'starborn',
              // marginBottom: 4,
              marginTop: 12,
              fontSize: 30
            }
          },
          {
            props: {className: 'header'},
            style: {
              fontFamily: 'malibu',
              marginBottom: 4,
              marginTop: 30,
              fontSize: 18,
            }
          },
          {
            props: {className: 'subHeader'},
            style: {
              fontFamily: 'malibu',
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
    }
  }
});

export default theme;