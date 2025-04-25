import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

type FormData = Yup.InferType<typeof validationSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ContactSection() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // Add your API submission logic here
  };

  return (
    <Container maxWidth="lg">
      <Box
        my={10}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="flex-start"
        gap={5}
      >
        {/* Get In Touch Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <Paper
            sx={{
              p: 3,
              background:
                "linear-gradient(135deg, rgb(109, 119, 146) 0%, rgb(116, 93, 93) 100%)",
              borderRadius: "20px",
              color: "white",
              boxShadow: 6,
              maxWidth: "100%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              fontWeight="bold"
            >
              Get In Touch
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Name Field */}
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Name"
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={{
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    }}
                  />
                )}
              />

              {/* Email Field */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    }}
                  />
                )}
              />

              {/* Message Field */}
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    margin="normal"
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={{
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    }}
                  />
                )}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#64b5f6",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#f50057" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: "16px",
              padding: "40px",
              margin: "auto",
              background: "#f3e5f5",
            }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Title */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  gutterBottom
                  fontWeight="bold"
                  color="#000"
                  mb={4}
                  sx={{
                    fontFamily: "Raleway, sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  Let’s Connect
                </Typography>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  mb={3}
                  justifyContent="center"
                >
                  <Box
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      p: 1,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Typography variant="body1" color="#000" fontWeight="bold">
                    +91 9830312150
                  </Typography>
                </Stack>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  mb={3}
                  justifyContent="center"
                >
                  <Box
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      p: 1,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Typography variant="body1" color="#000" fontWeight="bold">
                    tanimateach1982@gmail.com
                  </Typography>
                </Stack>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  justifyContent="center"
                >
                  <Box
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      p: 1,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Typography variant="body1" color="#000" fontWeight="bold">
                    Kolkata, West Bengal
                  </Typography>
                </Stack>
              </motion.div>

              {/* Download Button */}
              <motion.div variants={itemVariants}>
                <Box mt={5}>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    href="/my_resume/cv_of_Tanima_new.pdf"
                    download
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#ff7043",
                      color: "#000",
                      px: 5,
                      py: 1.5,
                      fontSize: "1rem",
                      borderRadius: "12px",
                      border: "2px solid rgb(34, 35, 36)",
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "white",
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
}
