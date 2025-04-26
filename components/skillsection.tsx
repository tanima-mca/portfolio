import { skillsList } from "@/utils/data";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SkillCard } from "./skillcard";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

export const SkillsSection = () => {
  return (
    <Container maxWidth="lg" id="skills">
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mt={6}
        mb={4}
        color="#4527a0"
        sx={{ fontSize: "2.5rem" }}
      >
        My Skills
      </Typography>

      <Box
        width="100%"
        display="grid"
        justifyItems="center" // ✅ added
        gridTemplateColumns={{
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={3}
      >
        {skillsList.map((skill, index) => (
          <MotionBox
            key={skill.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <SkillCard title={skill.title} icon={skill.icon} />
          </MotionBox>
        ))}
      </Box>
    </Container>
  );
};
