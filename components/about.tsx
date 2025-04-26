/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box my={6} textAlign="center" px={2}>
      <Avatar
        src="/images/profilepic.jpg"
        sx={{
          width: { xs: 150, sm: 200, md: 250 },
          height: { xs: 150, sm: 200, md: 250 },
          margin: "0 auto",
          boxShadow: 4,
          border: "4px solid #90caf9",
        }}
      />
      <Typography
        variant="h4"
        mt={3}
        fontWeight="bold"
        color="#ef6c00"
        sx={{
          mb: 5,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "2.75rem" },
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 4,
          maxWidth: "1000px",
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: 2,
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: 1.7,
          backgroundColor: "background.paper",
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          boxShadow: 2,
          fontSize: { xs: "0.95rem", sm: "1rem" },
        }}
      >
        I am currently working as a Junior React Developer at Primetech System &
        Solutions, where I’m gaining valuable experience in building and
        maintaining modern web pages and dashboards. Under the guidance of my
        team leader, I translate design mock-ups into responsive user
        interfaces, ensuring cross-browser compatibility and seamless backend
        integration.
        <br />
        <br />
        Collaborating closely with my team, I optimize website performance and
        enhance user experiences. As a passionate front-end developer with a
        strong foundation in Next.js, TypeScript, and modern web technologies, I
        take pride in solving problems through clean, scalable code.
        <br />
        <br />
        Whether it’s crafting intuitive layouts or boosting performance, I
        strive to deliver elegant and maintainable solutions. I’m always eager
        to learn, grow, and take on new challenges that push my skills forward.
      </Typography>
    </Box>
  );
};

export default About;
