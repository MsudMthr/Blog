import Image from "next/image";
import React from "react";

const LastArticle = ({ blogs }) => {
  console.log(blogs);
  return (
    <section className="max-w-screen-lg px-14 mx-auto mt-10">
      <h1 className="font-bold text-sky-600 text-2xl ">آخرین مقالات</h1>
      <div>
        {blogs.posts?.map((blog) => (
          <p key={blog.id}>{blog.title}</p>
        ))}
      </div>
    </section>
  );
};

export default LastArticle;
