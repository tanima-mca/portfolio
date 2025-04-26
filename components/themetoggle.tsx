// /components/themetoggle.tsx
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type ThemeToggleProps = {
  toggleTheme: () => void;
  currentMode: 'light' | 'dark';
};

export default function ThemeToggle({ toggleTheme, currentMode }: ThemeToggleProps) {
  return (
    <IconButton onClick={toggleTheme} color="inherit"
    sx={{
      color: currentMode === 'dark' ? '#fff' : '#000', // Change icon color based on the mode
    }}>
      {currentMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
