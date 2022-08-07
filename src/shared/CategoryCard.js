import { CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useAOS from "../hooks/useAOS";
const CategoryCard = ({ data }) => {
  const { cover, name } = data;

  useAOS();

  return (
    <Link passHref href={"#"}>
      <CardActionArea
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex flex-col items-center gap-2 max-w-[120px] rounded-md"
      >
        <Image
          src={cover.url}
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

export default CategoryCard;
