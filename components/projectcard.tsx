import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
        component="a" href={link} target="_blank" rel="noopener noreferrer">
    <CardMedia component="img" height="160" image={image} alt={title} />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);
