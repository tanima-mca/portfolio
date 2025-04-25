// import { createTheme } from '@mui/material/styles'

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#90caf9',
//     },
//     background: {
//       default: '#121212',
//       paper: '#1e1e1e',
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", sans-serif',
//   },
// })

// export default theme


// /theme/theme.ts
// /theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1565c0' },
            background: { default: '#f5f5f5', paper: '#ffffff' },
            text: { primary: '#000000' },
          }
        : {
            primary: { main: '#90caf9' },
            background: { default: '#121212', paper: '#1e1e1e' },
            text: { primary: '#ffffff' },
          }),
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });
