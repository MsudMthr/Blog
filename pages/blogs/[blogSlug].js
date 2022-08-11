import React from "react";
import { GET_ALL_BLOGS } from "../../src/graphQl/queries";
import { client } from "../_app";
const blogPage = () => {
  return <div></div>;
};

export default blogPage;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_BLOGS,
  });

  const paths = data.posts.map((post) => {
    return {
      params: { blogSlug: `${post.slug}` },
    };
  });

  console.log(data);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  return {
    props: {},
  };
};
