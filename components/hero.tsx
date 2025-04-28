import { Typography, Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 * i },
  }),
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // ✅ detect mobile

  const intro = isMobile
    ? ["Hi! I am Tanima", "a Frontend Developer"] // ✅ two lines for mobile
    : ["Hi! I am Tanima, a Frontend Developer"]; // ✅ one line for desktop

  return (
    <Box
      mt={8}
      mb={4}
      sx={{
        display: "flex", // ✅
        flexDirection: "column", // ✅
        alignItems: "center", // ✅
        justifyContent: "center", // ✅
        textAlign: "center", // ✅
        px: 2, // ✅ Responsive padding
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {intro.map((line, lineIndex) => (
          <Box key={lineIndex} component="div" sx={{ display: "inline" }}>
            {line.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 3rem)",
                  fontFamily: "'Dancing Script', cursive",
                  marginRight: char === " " ? "0.5rem" : 0,
                  wordBreak: "break-word",
                }}
              >
                {char}
              </motion.span>
            ))}
            {lineIndex !== intro.length - 1 && <br />} {/* ✅ add line break */}
          </Box>
        ))}
      </motion.div>

      <Typography
        variant="h5"
        sx={{ mt: 2, fontFamily: "'Poppins', sans-serif" }}
      >
        I build modern web experiences
      </Typography>
    </Box>
  );
};

export default Hero;
