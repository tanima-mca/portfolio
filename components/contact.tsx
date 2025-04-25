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
    // <Container maxWidth="lg">
    //   <Box my={10}>
    //     <Grid container spacing={6} alignItems="center" justifyContent="center">
    //       {/* Left Section – Get In Touch Form */}
    //       <Grid item xs={12} md={6}>
    //         <motion.div
    //           initial={{ opacity: 0, x: -100 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //         >
    //           <Paper
    //             sx={{
    //               p: 3,
    //               background: "linear-gradient(135deg,rgb(62, 63, 66) 0%,rgb(63, 63, 63) 100%)",
    //               borderRadius: "20px",
    //               color: "white",
    //               boxShadow: 6,
    //               width: "100%",
    //               maxWidth: "500px",
    //               margin: "0 auto",
    //             }}
    //           >
    //             <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
    //               Get In Touch
    //             </Typography>

    //             <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
    //               <Controller
    //                 name="name"
    //                 control={control}
    //                 render={({ field }) => (
    //                   <TextField
    //                     {...field}
    //                     fullWidth
    //                     label="Name"
    //                     margin="normal"
    //                     error={!!errors.name}
    //                     helperText={errors.name?.message}
    //                     sx={{
    //                       "& .MuiInputLabel-root": { color: "white" },
    //                       "& .MuiInputBase-input": { color: "white" },
    //                       "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    //                     }}
    //                   />
    //                 )}
    //               />

    //               <Controller
    //                 name="email"
    //                 control={control}
    //                 render={({ field }) => (
    //                   <TextField
    //                     {...field}
    //                     fullWidth
    //                     label="Email"
    //                     margin="normal"
    //                     error={!!errors.email}
    //                     helperText={errors.email?.message}
    //                     sx={{
    //                       "& .MuiInputLabel-root": { color: "white" },
    //                       "& .MuiInputBase-input": { color: "white" },
    //                       "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    //                     }}
    //                   />
    //                 )}
    //               />

    //               <Controller
    //                 name="message"
    //                 control={control}
    //                 render={({ field }) => (
    //                   <TextField
    //                     {...field}
    //                     fullWidth
    //                     label="Message"
    //                     multiline
    //                     rows={4}
    //                     margin="normal"
    //                     error={!!errors.message}
    //                     helperText={errors.message?.message}
    //                     sx={{
    //                       "& .MuiInputLabel-root": { color: "white" },
    //                       "& .MuiInputBase-input": { color: "white" },
    //                       "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    //                     }}
    //                   />
    //                 )}
    //               />

    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 fullWidth
    //                 sx={{
    //                   mt: 2,
    //                   backgroundColor: "#64b5f6",
    //                   fontWeight: "bold",
    //                   "&:hover": {
    //                     backgroundColor: "#f50057",
    //                   },
    //                 }}
    //               >
    //                 Send Message
    //               </Button>
    //             </Box>
    //           </Paper>
    //         </motion.div>
    //       </Grid>

    //       {/* Right Section – Contact Details */}
    //       <Grid item xs={12} md={6}>
    //         <motion.div
    //           initial={{ opacity: 0, x: 100 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //         >
    //           <Paper
    //             elevation={3}
    //             sx={{
    //               p: 5,
    //               borderRadius: "30px",
    //               backgroundColor: "#fff8e1",
    //               textAlign: "center",
    //               boxShadow: "0 8px 32px 0 rgba(16, 15, 15, 0.6)",
    //             }}
    //           >
    //             <Typography
    //               variant="h5"
    //               gutterBottom
    //               fontWeight="bold"
    //               color="#0d47a1"
    //               marginBottom="30px"
    //             >
    //               Contact With Me
    //             </Typography>

    //             <Stack direction="row" alignItems="center" spacing={2} mb={3} justifyContent="center">
    //               <Box
    //                 sx={{
    //                   backgroundColor: "#1976d2",
    //                   color: "white",
    //                   p: 1,
    //                   borderRadius: "50%",
    //                   display: "flex",
    //                   alignItems: "center",
    //                 }}
    //               >
    //                 <PhoneIcon />
    //               </Box>
    //               <Typography variant="body1" color="#000" fontWeight="bold">
    //                 +91 9830312150
    //               </Typography>
    //             </Stack>

    //             <Stack direction="row" alignItems="center" spacing={2} mb={3} justifyContent="center">
    //               <Box
    //                 sx={{
    //                   backgroundColor: "#1976d2",
    //                   color: "white",
    //                   p: 1,
    //                   borderRadius: "50%",
    //                   display: "flex",
    //                   alignItems: "center",
    //                 }}
    //               >
    //                 <EmailIcon />
    //               </Box>
    //               <Typography variant="body1" color="#000" fontWeight="bold">
    //                 tanimateach1982@gmail.com
    //               </Typography>
    //             </Stack>

    //             <Stack direction="row" alignItems="center" spacing={2} justifyContent="center">
    //               <Box
    //                 sx={{
    //                   backgroundColor: "#1976d2",
    //                   color: "white",
    //                   p: 1,
    //                   borderRadius: "50%",
    //                   display: "flex",
    //                   alignItems: "center",
    //                 }}
    //               >
    //                 <LocationOnIcon />
    //               </Box>
    //               <Typography variant="body1" color="#000" fontWeight="bold">
    //                 Kolkata ,West Bengal
    //               </Typography>
    //             </Stack>
    //           </Paper>

    //           {/* Download CV Button */}
    //           <Box mt={5} textAlign="center">
    //             <Button
    //               variant="contained"
    //               startIcon={<DownloadIcon />}
    //               href="/my_resume/cv_of_Tanima.pdf"
    //               download
    //               sx={{
    //                 fontWeight: "bold",
    //                 backgroundColor: "#ff7043",
    //                 color: "#000",
    //                 px: 5,
    //                 py: 1.5,
    //                 fontSize: "1rem",
    //                 borderRadius: "12px",
    //                 "&:hover": {
    //                   backgroundColor: "#1976d2",
    //                   color: "white",
    //                 },
    //               }}
    //             >
    //               Download CV
    //             </Button>
    //           </Box>
    //         </motion.div>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Container>

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
                "linear-gradient(135deg, rgb(62, 63, 66) 0%, rgb(63, 63, 63) 100%)",
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
              p: 5,
              borderRadius: "30px",
              backgroundColor: "#fff8e1",
              textAlign: "center",
              boxShadow: "0 8px 32px 0 rgba(16, 15, 15, 0.6)",
              width: "400px",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              color="#0d47a1"
              marginBottom="30px"
            >
              Contact With Me
            </Typography>

            {/* Phone */}
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

            {/* Email */}
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

            {/* Location */}
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
          </Paper>

          {/* Download CV */}
          <Box mt={5} display="flex" justifyContent="center">
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
      </Box>
    </Container>
  );
}
