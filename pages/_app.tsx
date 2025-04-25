// import type { AppProps } from 'next/app'
// import { ThemeProvider, CssBaseline } from '@mui/material'
// import theme from '../theme/theme'
// import '../styles/globals.css'
// import { AnimatePresence, motion } from 'framer-motion'
// import { useRouter } from 'next/router'
// import '@fontsource/dancing-script';
// import '@fontsource/poppins';


// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter()
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={router.route}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.4 }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//     </ThemeProvider>
//   )
// }


// /pages/_app.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '@/theme/theme';

import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { useThemeStore } from '@/store/themestore';

function MyApp({ Component, pageProps }: AppProps) {
  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
