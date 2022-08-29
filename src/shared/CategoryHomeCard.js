import { CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useAOS from "../hooks/useAOS";
const CategoryHomeCard = ({ data }) => {
  const { cover, name, id } = data;
  useAOS();

  return (
    <Link
      passHref
      href={`/categories/${id}`}
      className="flex items-center justify-center"
    >
      <div className="relative flex cursor-pointer flex-col items-center">
        <Image
          src={cover.url}
          alt={name}
          width={200}
          height={130}
          className={"rounded-md "}
        />
        <p className="absolute -bottom-3 w-10/12 rounded-md bg-orange-100/30 text-center font-bold leading-10 backdrop-blur-sm">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryHomeCard;
