// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   ListItemButton,
//   Divider,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';
// import ThemeToggle from './themetoggle';

// type HeaderProps = {
//   toggleTheme: () => void;
//   currentMode: 'light' | 'dark';
// };

// export default function Header({ toggleTheme, currentMode }: HeaderProps) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const navLinks = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         elevation={1}
//         sx={{
//           background: 'rgba(14, 14, 14, 0.3)',
//           backdropFilter: 'blur(6px)',
//           color: '#333',
//           borderBottom: '1px solid #e0e0e0',
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, fontWeight: 600, color: '#fff' }}
//           >
//             My Portfolio
//           </Typography>

//           {isMobile ? (
//             <IconButton
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               onClick={() => setDrawerOpen(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <Box>
//               {navLinks.map((link) => (
//                 <Button
//                   key={link.label}
//                   href={link.href}
//                   sx={{
//                     color: link.label === 'Contact' ? '#000' : '#fff',
//                     backgroundColor: link.label === 'Contact' ? '#ffccbc' : 'transparent',
//                     fontWeight: 'bold',
//                     fontSize: '1rem',
//                     fontFamily: "'Poppins', sans-serif",
//                     textTransform: 'none',
//                     px: link.label === 'Contact' ? 2 : 0,
//                     borderRadius: link.label === 'Contact' ? 2 : 0,
//                     transition: '0.3s',
//                     ml: 1,
//                     '&:hover': {
//                       backgroundColor:
//                         link.label === 'Contact' ? '#1565c0' : 'transparent',
//                     },
//                   }}
//                 >
//                   {link.label}
//                 </Button>
//               ))}
//               <ThemeToggle toggleTheme={toggleTheme} currentMode={currentMode} />
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 200 }}>
//           <List>
//             {navLinks.map((link) => (
//               <ListItemButton
//                 key={link.label}
//                 component="a"
//                 href={link.href}
//                 onClick={() => setDrawerOpen(false)}
//               >
//                 <ListItemText primary={link.label} />
//               </ListItemButton>
//             ))}
//           </List>
//           <Divider />
//           <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
//             <ThemeToggle toggleTheme={toggleTheme} currentMode={currentMode} />
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// /components/header.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ThemeToggle from "./themetoggle";
import { useThemeStore } from "@/store/themestore";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { mode, toggleTheme } = useThemeStore();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          background: "rgba(14, 14, 14, 0.3)",
          backdropFilter: "blur(6px)",
          color: "#333",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600, color: "#fff" }}
          >
            My Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
          ) : (
            <Box>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: link.label === "Contact" ? "#000" : "#fff",
                    backgroundColor:
                      link.label === "Contact" ? "#ffccbc" : "transparent",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "none",
                    px: link.label === "Contact" ? 2 : 0,
                    borderRadius: link.label === "Contact" ? 2 : 0,
                    transition: "0.3s",
                    ml: 1,
                    "&:hover": {
                      backgroundColor:
                        link.label === "Contact" ? "#1565c0" : "transparent",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <ThemeToggle toggleTheme={toggleTheme} currentMode={mode} />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          sx: { width: 250 },
        }}
      >
        <Box sx={{ width: 200 }}>
          <List>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.label}
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
            <ThemeToggle toggleTheme={toggleTheme} currentMode={mode} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
