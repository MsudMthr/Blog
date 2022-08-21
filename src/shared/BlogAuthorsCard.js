import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogAuthorsCard = ({ blogData }) => {
  const { coverPhoto, slug, title } = blogData;
  return (
    <div className=" relative rounded-md overflow-hidden ">
      <Image
        src={coverPhoto.url}
        alt={slug}
        width={250}
        height={200}
        className=""
      />
      <div className="absolute bottom-0 flex w-full flex-col items-start bg-gradient-to-b from-white/0 via-black/50 to-black/80  py-2 px-2 backdrop-blur-md">
        <h4 className=" text-lg font-semibold text-gray-100">{title}</h4>
        <Link href={`/blogs/${slug}`}>
          <a className="self-end font-semibold text-lightBlue transition-all hover:text-darkBlue">
            بیشتر
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogAuthorsCard;
