import { skillsList } from "@/utils/data";
import { Box, Container, Typography } from "@mui/material";

import { motion } from "framer-motion";
import { SkillCard } from "./skillcard";

const MotionBox = motion(Box);

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
        gridTemplateColumns={{
          xs: "repeat(2, 1fr)", // Small screens: 2 per row
          sm: "repeat(3, 1fr)", // Medium screens: 3 per row
          md: "repeat(5, 1fr)", // Large screens: 5 per row
        }}
        gap={3}
      >
        {skillsList.map((skill, index) => (
          <MotionBox
            key={skill.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <SkillCard title={skill.title} icon={skill.icon} />
          </MotionBox>
        ))}
      </Box>
    </Container>
  );
};
