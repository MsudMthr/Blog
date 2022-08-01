import React from "react";
import LatestBlogCard from "../../../shared/LatestBlogCard";

const LastArticle = ({ blogs }) => {
  console.log(blogs);
  return (
    <section className="max-w-screen-lg px-14 mx-auto mt-10" id="latest">
      <h1 className="font-bold text-sky-600 text-2xl ">آخرین مقالات</h1>
      <div className="flex mt-2 md:justify-between items-center flex-wrap gap-x-2 gap-y-10 justify-center sm:flex-row flex-col">
        {blogs?.map((blog) => (
          <LatestBlogCard blogData={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default LastArticle;
