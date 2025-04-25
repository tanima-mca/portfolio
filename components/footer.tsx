import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#37474f",
        color: "#fff",
        py: 4,
        mt: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight="bold" fontSize='25px'>
        Connect with me
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={3} mb={2}>
        <IconButton
          href="https://github.com/tanima-mca"
          target="_blank"
          rel="noopener"
          sx={{ color: "#fff", "&:hover": { color: "#ff7043" } }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "#fff", "&:hover": { color: "#1877f2" } }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "#fff", "&:hover": { color: "#e1306c" } }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/tanima-bhattacharyya-2881692b9/"
          target="_blank"
          rel="noopener"
          sx={{ color: "#fff", "&:hover": { color: "#0077b5" } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2">
        © {new Date().getFullYear()} Tanima Bhattacharyya. All rights reserved.
      </Typography>
    </Box>
  );
}
