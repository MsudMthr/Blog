import React from "react";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AuthorCard = ({ author }) => {
  const { name, avatar, slug, id } = author;
  return (
    <Link passHref href={"#"}>
      <CardActionArea
        data-aos="zoom"
        data-aos-duration="1500"
        className="flex flex-col items-center gap-2 max-w-[120px] rounded-md"
      >
        <Image
          src={avatar.url}
          alt={name}
          className={"cursor-pointer rounded-2xl"}
          width={100}
          height={100}
        />
        <Typography
          variant="h6"
          component={"p"}
          fontWeight="700"
          className="cursor-pointer text-base md:text-xl "
        >
          {name}
        </Typography>
      </CardActionArea>
    </Link>
  );
};

export default AuthorCard;
