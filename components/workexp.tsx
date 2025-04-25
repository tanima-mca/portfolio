// components/WorkExp.tsx

import React from "react";
import { Box, Typography, Card, CardContent, Divider,Container } from "@mui/material";
import { Work as WorkIcon } from "@mui/icons-material";


const cardStyle = {
  flex: 1,
  minWidth: 400,
  borderRadius: 2,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
  transition: "0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.8)",
    transform: "translateY(-5px)",
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

const WorkExp: React.FC = () => {
  return (
    // <>
    //   <Typography
    //     variant="h4"
    //     textAlign="center"
    //     gutterBottom
    //     sx={{
    //       fontWeight: "bold",
    //       color: "#ff5722",
    //       fontSize: "45px",
    //       mt: 6,
    //       mb: 6,
    //     }}
    //   >
    //     Work Experience
    //   </Typography>
<>
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            color: "#ff5722",
            fontFamily: "Raleway, sans-serif",
            mb: 5,
          }}
        >
          Work Experience
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {/* Experience Card 1 */}
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" textAlign="center" sx={titleStyle}>
                <WorkIcon sx={{ mr: 1 }} />
                HTML Developer Trainee - Weavers Web Academy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: 7 months
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant="body1" sx={{ color: "#444" }}>
                Gained hands-on experience in HTML, CSS, and web development
                practices.
              </Typography>
            </CardContent>
          </Card>

          {/* Experience Card 2 */}
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" textAlign="center" sx={titleStyle}>
                <WorkIcon sx={{ mr: 1 }} />
                Internship As HTML Developer - Zediant Technologies Pvt. Ltd.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: 3 months
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant="body1" sx={{ color: "#444" }}>
                Assisted in front-end web development projects, working on HTML5
                and CSS3.
              </Typography>
            </CardContent>
          </Card>

          {/* Experience Card 3 */}
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" textAlign="center" sx={titleStyle}>
                <WorkIcon sx={{ mr: 1 }} />
                React.js Trainee - Webskitters Academy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: 9 months
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant="body1" sx={{ color: "#444" }}>
                Developed interactive web apps using Adv JS, React JS, Next JS,
                with Redux & Zustand.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default WorkExp;
