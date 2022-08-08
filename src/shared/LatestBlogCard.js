import React, { useEffect } from "react";
import Image from "next/image";
import { dateSplitter, textShorter } from "../helper/function";
import useAOS from "../hooks/useAOS";
import "aos/dist/aos.css";
import { Divider, Typography } from "@mui/material";
import Link from "next/link";
import { Comment, Share } from "@mui/icons-material";
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

  const sharedData = {
    title,
    text,
    url: "link",
  };

  return (
    <div className="flex max-w-[280px] flex-col gap-1" data-aos="fade-down">
      <Image
        src={url}
        alt={slug}
        width={"280"}
        height={"200"}
        className="rounded-sm"
      />
      <Typography variant="h3" className="text-xl font-bold   text-dark ">
        {title}
      </Typography>
      <div className="flex flex-row-reverse justify-start gap-2">
        <Typography className="font-thin text-dark " variant="p">
          {dateSplitter(published_time)}
        </Typography>
        <Typography
          variant="p"
          className="ml-2 cursor-pointer text-justify text-dark hover:text-cyan-600 "
        >
          {author}
        </Typography>
      </div>
      <Divider />

      <p className="text-justify text-dark line-clamp-3 ">{text.text}</p>
      <Divider />
      <div className="flex flex-col items-end gap-2">
        <Link href="#">
          <a className="text-sm font-bold transition-all hover:text-lightBlue">
            بیشتر
          </a>
        </Link>
        <div className="flex gap-0.5">
          <button>
            <Comment fontSize="small" className="border shadow-sm" />
          </button>
          <button onClick={() => navigator.share(sharedData)}>
            <Share fontSize="small" className="border shadow-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
