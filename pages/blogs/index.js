import React from "react";
import { useQuery } from "@apollo/client";
import Layout from "../../src/components/layout/Layout";
import { initializeApollo } from "../../src/graphQl/apollo";
import { GET_ALL_BLOGS } from "../../src/graphQl/queries";
import BlogCard from "../../src/shared/BlogCard";

const Blogs = () => {
  const { data, loading } = useQuery(GET_ALL_BLOGS);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <Layout>
      <section className="mx-auto  my-4 max-w-screen-lg">
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {data.posts.map((blog) => (
            <BlogCard blogData={blog} key={blog.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps = async (context) => {
  const apolloCLient = initializeApollo();

  await apolloCLient.query({ query: GET_ALL_BLOGS });

  return {
    props: {
      initializeApolloState: apolloCLient.cache.extract(),
    },
  };
};
