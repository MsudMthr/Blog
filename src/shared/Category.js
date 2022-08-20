import React from "react";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ data }) => {
  return (
    <Link passHref href={`/categories/${data.id}`} className="">
      <a className=" z-1 relative flex items-center justify-center overflow-hidden rounded-xl shadow-md shadow-dark transition-all duration-200 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/40 after:content-[''] hover:-translate-y-2 hover:shadow-lg">
        <Image
          src={data.cover.url}
          alt={data.categorySlug}
          width={300}
          height={200}
        />
        <p className="absolute z-20 text-3xl font-bold text-gray-200">
          {data.name}
        </p>
      </a>
    </Link>
  );
};

export default CategoryCard;
