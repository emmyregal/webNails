import { createTheme, ThemeProvider } from '@mui/material/styles';

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
                color: logoPink
            }
        }
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