import { CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useAOS from "../hooks/useAOS";
const CategoryHomeCard = ({ data }) => {
  const { cover, name } = data;

  useAOS();

  return (
    <Link passHref href={"#"} className="flex items-center justify-center">
      <CardActionArea
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex max-w-[120px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md"
      >
        <Image
          src={cover.url}
          alt={name}
          className={" rounded-2xl"}
          width={100}
          height={100}
        />
        <Typography
          variant="h6"
          component={"p"}
          fontWeight="700"
          className=" text-base md:text-xl "
        >
          {name}
        </Typography>
      </CardActionArea>
    </Link>
  );
};

export default CategoryHomeCard;
