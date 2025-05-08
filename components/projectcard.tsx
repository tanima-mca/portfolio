import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

// export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => (
//   <Card sx={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
//         component="a" href={link} target="_blank" rel="noopener noreferrer">
//     <CardMedia component="img" height="200" image={image} alt={title} />
//     <CardContent sx={{ flexGrow: 1 }}>
//       <Typography variant="h6" gutterBottom>{title}</Typography>
//       <Typography sx={{fontSize:"15px", fontWeight:"bold"}}>{description}</Typography>
//     </CardContent>
//   </Card>
// );





export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => (
  <Card
    component="a"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
      borderRadius: 3,
      overflow: "hidden",
      transition: "transform 0.3s, box-shadow 0.3s",
      boxShadow: 3,
      '&:hover': {
        transform: "translateY(-8px)",
        boxShadow: 6,
      },
    }}
  >
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={title}
      sx={{ objectFit: "cover", filter: "brightness(95%)" }}
    />
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main", fontSize: "1.2rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "0.95rem", color: "text.secondary", fontWeight: 500 }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);
