import React from "react";
import { GET_ALL_BLOGS, GET_POST_INFO } from "../../src/graphQl/queries";
import { client } from "../_app";
const blogPage = ({ blog }) => {
  console.log(blog);
  return <div></div>;
};

export default blogPage;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_BLOGS,
  });

  const paths = await data.posts.map((post) => {
    return {
      params: { blogSlug: `${post.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { blogSlug },
  } = context;
  console.log(blogSlug);
  const { data } = await client.query({
    query: GET_POST_INFO,
    // variables: { blogSlug },
  });
  return {
    props: {
      blog: data,
    },
  };
};
