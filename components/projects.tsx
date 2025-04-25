import { projectData } from "@/utils/data";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ProjectCard } from "./projectcard";

const MotionBox = motion(Box);

const ProjectsPage = () => {
  return (
    <Container maxWidth="lg" id="projects">
      <Box my={4}>
        <Typography
          variant="h4"
          mt={3}
          fontWeight="bold"
          color="#0277bd"
          textAlign="center"
          sx={{ mb: 5, fontSize: '2.75rem' }}
        >
          Projects
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }}
          gap={4}
        >
          {projectData.map((project, index) => (
            <MotionBox
              key={project.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              height="100%"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.Live_link}
              />
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectsPage;
