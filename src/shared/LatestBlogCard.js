import React, { useEffect } from "react";
import Image from "next/image";
import { dateSplitter, textShorter } from "../helper/function";
import useAOS from '../hooks/useAOS'
import "aos/dist/aos.css";
const LatestBlogCard = ({ blogData }) => {
  const {
    coverPhoto: { url },
    text,
    slug,
    title,
    published_time,
    author,
  } = blogData;

  useAOS()

  return (
    <div className="max-w-[280px] flex flex-col gap-1" data-aos="fade-down">
      <Image
        src={url}
        alt={slug}
        width={"280"}
        height={"200"}
        className="rounded-sm"
      />
      <h3 className="text-xl font-bold text-justify ">{title}</h3>
      <div className="flex gap-2 justify-start flex-row-reverse">
        <p className="font-thin">{dateSplitter(published_time)} </p>
        <p className="ml-2 hover:text-cyan-600 cursor-pointer"> {author}</p>
      </div>
      <p className="text-justify ">{textShorter(text.text)} ...</p>
    </div>
  );
};

export default LatestBlogCard;
