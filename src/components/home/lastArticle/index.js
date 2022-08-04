import React from "react";
import LatestBlogCard from "../../../shared/LatestBlogCard";

const LastArticle = ({ blogs }) => {
  return (
    <section
      className="max-w-screen-lg px-14 mx-auto mt-10 flex flex-col justify-center items-center "
      id="latest"
    >
      <h1 className="font-bold text-darkBlue text-2xl self-start ">
        آخرین مقالات
      </h1>
      <div className="flex mt-2 md:justify-between items-center flex-wrap gap-x-2 gap-y-10 justify-center sm:flex-row flex-col">
        {blogs?.map((blog) => (
          <LatestBlogCard blogData={blog} key={blog.id} />
        ))}
      </div>
      <button className="ring-2 px-6 py-0.5 mt-3 rounded font-medium ring-lightBlue text-lightBlue hover:bg-darkBlue/10 transition-all duration-300 focus:bg-lightBlue focus:text-milkyWhite  ">
        بیش تر
      </button>
    </section>
  );
};

export default LastArticle;
