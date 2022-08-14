import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../src/graphQl/apollo";
import { GET_ALL_BLOGS, GET_POST_INFO } from "../../src/graphQl/queries";

const BlogPage = ({ slug }) => {
  const { data, loading } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  console.log({ slug });
  console.log(data);
  if (loading) return <h1>Loading ...</h1>;
  return <div></div>;
};

export default BlogPage;

const apolloClient = initializeApollo();

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
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

export const getStaticProps = async ({ params }) => {
  const slug = params.blogSlug;

  await apolloClient.query({
    query: GET_POST_INFO,
    variables: { slug },
  });
  console.log(slug);
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      slug,
    },
  };
};
