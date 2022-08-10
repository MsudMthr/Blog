import React from "react";
import BlogCard from "../../../shared/BlogCard";
import { useRouter } from "next/router";
const LastArticle = ({ blogs }) => {
  const router = useRouter();

  return (
    <section
      className="mx-auto mt-10 flex max-w-screen-lg flex-col items-center justify-center px-14 "
      id="latest"
    >
      <h1 className="self-start text-2xl font-bold text-darkBlue ">
        آخرین مقالات
      </h1>
      <div className="mt-2 flex flex-col flex-wrap items-center justify-center gap-x-2 gap-y-10 sm:flex-row md:justify-between">
        {blogs?.map((blog) => (
          <BlogCard blogData={blog} key={blog.id} />
        ))}
      </div>
      <button
        onClick={() => router.push("/blogs")}
        className="mt-3 rounded px-6 py-0.5 font-medium text-lightBlue ring-2 ring-lightBlue transition-all duration-300 hover:bg-darkBlue/10 focus:bg-lightBlue focus:text-milkyWhite  "
      >
        بیش تر
      </button>
    </section>
  );
};

export default LastArticle;
