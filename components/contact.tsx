// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   Stack,
//   TextField,
//   Typography,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Controller, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import DownloadIcon from "@mui/icons-material/Download";
// import { motion } from "framer-motion";

// // Validation Schema
// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   message: Yup.string().required("Message is required"),
// });

// type FormData = Yup.InferType<typeof validationSchema>;

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// export default function ContactSection() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormData>({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = (data: FormData) => {
//     console.log("Form Data:", data);
//     // API submission logic can go here
//   };

//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // for responsiveness

//   return (
//     <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 }, py: 8 }}>
//       <Box
//         display="flex"
//         flexDirection={{ xs: "column", md: "row" }}
//         justifyContent="center"
//         alignItems="stretch"
//         gap={5}
//       >
//         {/* Get In Touch Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           style={{ flex: 1 }}
//         >
//           <Paper
//             sx={{
//               p: { xs: 3, sm: 4 },
//               background: "linear-gradient(135deg, #6d7792 0%, #745d5d 100%)",
//               borderRadius: "20px",
//               color: "white",
//               height: "100%",
//               boxShadow: 6,
//             }}
//           >
//             <Typography
//               variant={isSmallScreen ? "h5" : "h4"}
//               gutterBottom
//               textAlign="center"
//               fontWeight="bold"
//             >
//               Get In Touch
//             </Typography>

//             <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
//               {/* Name Field */}
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
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: "white",
//                       },
//                     }}
//                   />
//                 )}
//               />

//               {/* Email Field */}
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
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: "white",
//                       },
//                     }}
//                   />
//                 )}
//               />

//               {/* Message Field */}
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
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: "white",
//                       },
//                     }}
//                   />
//                 )}
//               />

//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 disabled={isSubmitting}
//                 sx={{
//                   mt: 3,
//                   py: 1.5,
//                   fontWeight: "bold",
//                   backgroundColor: "#64b5f6",
//                   "&:hover": { backgroundColor: "#f50057" },
//                   "&:disabled": { backgroundColor: "#90caf9" },
//                 }}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </Box>
//           </Paper>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           style={{ flex: 1 }}
//         >
//           <Paper
//             sx={{
//               p: { xs: 3, sm: 4 },
//               background:
//                 "linear-gradient(135deg,rgb(148, 161, 111) 0%,rgb(157, 212, 237) 100%)",
//               borderRadius: "20px",
//               color: "white",
//               height: "100%",
//               boxShadow: 8,
//             }}
//           >
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "20px",
//               }}
//             >
//               {/* Title */}
//               <motion.div variants={itemVariants}>
//                 <Typography
//                   variant={isSmallScreen ? "h5" : "h4"}
//                   fontWeight="bold"
//                   sx={{
//                     fontFamily: "Raleway, sans-serif",
//                     letterSpacing: 1,
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   Let’s Connect
//                 </Typography>
//               </motion.div>

//               {/* Phone */}
//               <motion.div variants={itemVariants}>
//                 <Stack
//                   direction="row"
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent={isSmallScreen ? "center" : "flex-start"}
//                 >
//                   <Box
//                     sx={{
//                       backgroundColor: "#1976d2",
//                       p: 1,
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <PhoneIcon />
//                   </Box>
//                   <Typography variant="body1" fontWeight="bold">
//                     +91 9830312150
//                   </Typography>
//                 </Stack>
//               </motion.div>

//               {/* Email */}
//               <motion.div variants={itemVariants}>
//                 <Stack
//                   direction="row"
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent={isSmallScreen ? "center" : "flex-start"}
//                 >
//                   <Box
//                     sx={{
//                       backgroundColor: "#1976d2",
//                       p: 1,
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <EmailIcon />
//                   </Box>
//                   <Typography variant="body1" fontWeight="bold" >
//                     tanimateach1982@gmail.com
//                   </Typography>
//                 </Stack>
//               </motion.div>

//               {/* Location */}
//               <motion.div variants={itemVariants}>
//                 <Stack
//                   direction="row"
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent={isSmallScreen ? "center" : "flex-start"}
//                 >
//                   <Box
//                     sx={{
//                       backgroundColor: "#1976d2",
//                       p: 1,
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <LocationOnIcon />
//                   </Box>
//                   <Typography variant="body1" fontWeight="bold" >
//                     Kolkata, West Bengal
//                   </Typography>
//                 </Stack>
//               </motion.div>

//               {/* Download CV Button */}
//               <motion.div variants={itemVariants}>
//                 <Box mt={4} textAlign="center">
//                   {/* <Button
//                     variant="contained"
//                     startIcon={<DownloadIcon />}
//                     href="/my_resume/cv_of_Tanima_new.pdf"
//                     download
//                     sx={{
//                       fontWeight: "bold",
//                       backgroundColor: "#ff7043",
//                       color: "#000",
//                       px: 5,
//                       py: 1.5,
//                       fontSize: "1rem",
//                       borderRadius: "12px",
//                       border: "2px solid rgb(34, 35, 36)",
//                       "&:hover": {
//                         backgroundColor: "#1976d2",
//                         color: "white",
//                       },
//                     }}
//                   >
//                     Download CV
//                   </Button> */}
//                   <Button
//                     variant="contained"
//                     startIcon={<DownloadIcon />}
//                     sx={{fontWeight:"bold" ,backgroundColor: "#42a5f5",px: 5,
//                       py: 1.5,
//                       fontSize: "1rem",
//                       borderRadius: "12px",}}
//                     aria-label="Download CV"
//                     href="/my_resume/cv_of_Tanima_new.pdf"
//                     download
//                   >
//                     Download CV
//                   </Button>
//                 </Box>
//               </motion.div>
//             </motion.div>
//           </Paper>
//         </motion.div>
//       </Box>
//     </Container>
//   );
// }

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";

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
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // You can add API submission logic here
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // responsive check

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 }, py: 8 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="stretch"
        gap={5}
      >
        {/* Get In Touch Form */}
        <Paper
          sx={{
            flex: 1,
            p: { xs: 3, sm: 4 },
            background: "linear-gradient(135deg, #6d7792 0%, #745d5d 100%)",
            borderRadius: "20px",
            color: "white",
            height: "100%",
            boxShadow: 6,
          }}
        >
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
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
              disabled={isSubmitting}
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
                backgroundColor: "#64b5f6",
                "&:hover": { backgroundColor: "#f50057" },
                "&:disabled": { backgroundColor: "#90caf9" },
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Paper>

        {/* Contact Info */}
        <Paper
          sx={{
            flex: 1,
            p: { xs: 3, sm: 4 },
            background:
              "linear-gradient(135deg,rgb(148, 161, 111) 0%,rgb(157, 212, 237) 100%)",
            borderRadius: "20px",
            color: "white",
            height: "100%",
            boxShadow: 8,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            height="100%"
            justifyContent="center"
          >
            {/* Title */}
            <Typography
              variant={isSmallScreen ? "h5" : "h4"}
              fontWeight="bold"
              sx={{
                fontFamily: "Raleway, sans-serif",
                letterSpacing: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Let’s Connect
            </Typography>

            {/* Phone */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={isSmallScreen ? "center" : "flex-start"}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon />
              </Box>
              <Typography variant="body1" fontWeight="bold">
                +91 9830312150
              </Typography>
            </Stack>

            {/* Email */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={isSmallScreen ? "center" : "flex-start"}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon />
              </Box>
              <Typography variant="body1" fontWeight="bold">
                tanimateach1982@gmail.com
              </Typography>
            </Stack>

            {/* Location */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={isSmallScreen ? "center" : "flex-start"}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon />
              </Box>
              <Typography variant="body1" fontWeight="bold">
                Kolkata, West Bengal
              </Typography>
            </Stack>

            {/* Download CV Button */}
            <Box mt={4} textAlign="center">
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#42a5f5",
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
                aria-label="Download CV"
                href="/my_resume/cv_of_Tanima_new.pdf"
                download
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
