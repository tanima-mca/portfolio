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
      <Typography variant="h4" mt={3} fontWeight="bold" color="#ef6c00" sx={{mb:5,fontSize: '2.75rem'}}>
        About Me
      </Typography>
      <Typography
        variant="body1"
        mt={2}
        maxWidth="600px"
        mx="auto"
        sx={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "background.paper",
        }}
      >
        I’m a passionate frontend developer with a strong foundation in modern
        web technologies like Next.js and TypeScript. I enjoy solving problems
        through code and bringing intuitive, responsive user interfaces to life.
        From designing clean layouts to optimizing performance, I take pride in
        writing scalable, maintainable code that enhances the user experience.
        Whether it is building full-stack applications or fine-tuning frontend
        interactions, I am always eager to learn, build, and grow as a
        developer.
      </Typography>
    </Box>
  );
};

export default About;
