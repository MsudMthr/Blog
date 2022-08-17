import { client } from "pages/_app";
import React from "react";
import { GET_ALL_AUTHORS, GET_AUTHOR_INFO } from "src/graphQl/queries";

const AuthorPage = ({ author }) => {
  console.log(author);
  return <div></div>;
};

export default AuthorPage;

export const getStaticPaths = async (context) => {
  const { data } = await client.query({ query: GET_ALL_AUTHORS });
  const paths = await data.authors.map((author) => {
    return {
      params: { authorSlug: `${author.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.authorSlug;

  const author = await client.query({
    query: GET_AUTHOR_INFO,
    variables: { slug },
  });

  return {
    props: {
      author: author.data.author,
    },
  };
};
