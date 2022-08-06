import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useAOS from "../hooks/useAOS";
const CategoryCard = ({ data }) => {
  const { cover, name } = data;

  useAOS();

  return (
    <Link passHref href={"#"}>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex flex-col items-center gap-2"
      >
        <Image
          src={cover.url}
          alt={name}
          className={"cursor-pointer rounded-full"}
          width={200}
          height={200}
        />
        <Typography
          variant="h6"
          component={"p"}
          fontWeight="700"
          className="cursor-pointer"
        >
          {name}
        </Typography>
      </div>
    </Link>
  );
};

export default CategoryCard;
