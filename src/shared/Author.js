import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";

const Author = ({ data }) => {
  const { avatar, name, field, slug } = data;
  return (
    <div className="flex h-[250px] flex-col items-center justify-around">
      <Avatar src={avatar.url} className="h-40 w-40" />
      <p className="text-xl font-bold">{name}</p>
      <p>{field}</p>
      <Link href={`/authors/${slug}`}>
        <a className="rounded px-2 py-1 text-lightBlue transition-all hover:bg-lightBlue/30 hover:text-darkBlue">
          بیشتر
        </a>
      </Link>
    </div>
  );
};

export default Author;
