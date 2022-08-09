import React from "react";
import Layout from "../../src/components/layout/Layout";
import { GET_ALL_BLOGS } from "../../src/graphQl/queries";
import LatestBlogCard from "../../src/shared/LatestBlogCard";
import { client } from "../_app";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout>
      <section className="max-w-screen-lg  mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 ">
        {blogs.map((blog) => (
          <LatestBlogCard blogData={blog} key={blog.id} />
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
