import { Typography, Box, Avatar } from "@mui/material";

const About = () => {
  return (
    <Box my={6} textAlign="center">
      <Avatar
        src="/images/profilepic.jpg"
        sx={{
          width: 250,
          height: 250,
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
        sx={{ mb: 5, fontSize: "2.75rem" }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        mt={2}
        maxWidth="1000px"
        mx="auto"
       fontWeight="bold"
        // sx={{
        //   border: "1px solid #ccc",
        //   borderRadius: "12px",
        //   padding: "16px",
        //   backgroundColor: "background.paper",
        // }}
      >
        I am currently working as a Junior React Developer at Primetech System &
        Solutions, where I am gaining valuable experience in creating and
        maintaining web pages and dashboards under the guidance of my team
        leader. My responsibilities include translating design mock-ups into
        functional web interfaces, ensuring cross-browser compatibility, and
        integrating back-end functionality. I work closely with other team
        members to optimize website performance and enhance user experiences. As
        a passionate front-end developer with a strong foundation in Next.js,
        TypeScript, and modern web technologies, I take pride in solving
        problems through code and delivering intuitive, responsive user
        interfaces. Whether designing clean layouts or optimizing performance, I
        strive to write scalable, maintainable code that elevates the overall
        user experience. Eager to continuously learn and grow, I am always
        excited to take on new challenges and contribute to building innovative
        solutions.
      </Typography>
    </Box>
  );
};

export default About;
