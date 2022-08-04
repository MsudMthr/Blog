import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ data }) => {
  const {
    cover: { url },
    name,
  } = data;
  return (
    <div>
      <Image src={url} alt={name} className={"rounded-full"} />
      <Typography variant="h2" component={p}>
        {name}
      </Typography>
    </div>
  );
};

export default CategoryCard;
