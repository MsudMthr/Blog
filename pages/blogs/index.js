import React from "react";
import Layout from "../../src/components/layout/Layout";
import { GET_ALL_BLOGS } from "../../src/graphQl/queries";
import BlogCard from "../../src/shared/BlogCard";
import { client } from "../_app";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout>
      <section className="mx-auto  my-4 max-w-screen-lg">
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {blogs.map((blog) => (
            <BlogCard blogData={blog} key={blog.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: GET_ALL_BLOGS,
  });
  return {
    props: {
      blogs: data.posts,
    },
  };
};
