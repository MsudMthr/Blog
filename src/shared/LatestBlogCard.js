import React, { useEffect } from "react";
import Image from "next/image";
import { dateSplitter, textShorter } from "../helper/function";
import useAOS from "../hooks/useAOS";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
const LatestBlogCard = ({ blogData }) => {
  const {
    coverPhoto: { url },
    text,
    slug,
    title,
    published_time,
    author,
  } = blogData;

  useAOS();

  return (
    <div className="max-w-[280px] flex flex-col gap-1" data-aos="fade-down">
      <Image
        src={url}
        alt={slug}
        width={"280"}
        height={"200"}
        className="rounded-sm"
      />
      <Typography
        variant="h3"
        className="text-xl font-bold   text-dark "
      >
        {title}
      </Typography>
      <div className="flex gap-2 justify-start flex-row-reverse">
        <Typography className="font-thin text-dark " variant="p">
          {dateSplitter(published_time)}{" "}
        </Typography>
        <Typography
          variant="p"
          className="ml-2 hover:text-cyan-600 cursor-pointer text-dark text-justify "
        >
          {" "}
          {author}
        </Typography>
      </div>
      <p className="text-justify  text-dark ">{textShorter(text.text)} ...</p>
    </div>
  );
};

export default LatestBlogCard;
