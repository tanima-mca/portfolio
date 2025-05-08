import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Container,
} from "@mui/material";
import { Work as WorkIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const cardStyle = {
  // flex: 1,
  // minWidth: 300,
  height: 300, // Added
  width: "auto", // Added
  display: "flex", // Added
  justifyContent: "center", // Added
  alignItems: "center", // Added
  borderRadius: 3,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
  transition: "0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.8)",
    transform: "translateY(-6px)",
  },
  border: "1px solid #e0e0e0",
  backgroundColor: "#fafafa",
  padding: 2,
};

const titleStyle = {
  fontWeight: "bold",
  color: "#3f51b5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const experiences = [
  {
    id: 1,
    title: "HTML Developer Trainee - Weavers Web Academy",
    duration: "7 months",
    description:
      "Gained hands-on experience in HTML, CSS, and web development practices.",
  },
  {
    id: 2,
    title: "Internship As HTML Developer - Zediant Technologies Pvt. Ltd.",
    duration: "3 months",
    description:
      "Assisted in front-end web development projects, working on HTML5 and CSS3.",
  },
  {
    id: 3,
    title: "React.js Trainee - Webskitters Academy",
    duration: "9 months",
    description:
      "Developed interactive web apps using Adv JS, React JS, Next JS, with Redux & Zustand.",
  },
  {
    id: 3,
    title: "React.js Internship - Primetech Systems and Solutions",
    duration: "4 months",
    description:
      "Developed interactive dashboard using  React JS, Next JS,Typescript, MYSQL with Redux & Zustand.",
  },
];

const WorkExp: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      id="experience"
      sx={{ mt: 8, mb: 8, backgroundColor: "#000", py: 10, borderRadius: 4 }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          color: "#ff5722",
          fontFamily: "Raleway, sans-serif",
          mb: 5,
          fontSize: "2.5rem",
        }}
      >
        Work Experience
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {experiences.map((exp, index) => (
          <MotionBox
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            sx={{ flex: 1, }}
          >
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" textAlign="center" sx={titleStyle}>
                  <WorkIcon sx={{ mr: 1 }} />
                  {exp.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ mt: 1 }}
                >
                  Duration: {exp.duration}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#444", textAlign: "center" }}
                >
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>
        ))}
      </Box>
    </Container>
  );
};

export default WorkExp;
