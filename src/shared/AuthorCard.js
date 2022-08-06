import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const AuthorCard = ({ author }) => {
  const { name, avatar, slug, id } = author;
  return (
    <Card sx={{ maxWidth: 345, textAlign: "center", flex: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="h-[200px] w-[200px] "
          image={avatar.url}
          alt={slug}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AuthorCard;
