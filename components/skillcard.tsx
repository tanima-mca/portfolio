import { Box, Card, Typography } from "@mui/material";

interface SkillCardProps {
  title: string;
  icon: string;
}

export const SkillCard = ({ title, icon }: SkillCardProps) => {
  return (
    <Card
      sx={{
        p: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "0.3s",
        '&:hover': {
          transform: "scale(1.05)",
          boxShadow: 8
        }
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{ width: 80, height: 80, mb: 1 }}
      />
      <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
    </Card>
  );
};
