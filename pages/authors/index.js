import Layout from "@/components/layout/Layout";
import Author from "@/shared/Author";
import { client } from "pages/_app";
import React from "react";
import { GET_ALL_AUTHORS } from "src/graphQl/queries";

const Authors = ({ authors }) => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-around gap-3 min-h-[50vh]">
        {authors.map((author) => (
          <Author data={author} key={author.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Authors;

export const getStaticProps = async () => {
  const authors = await client.query({ query: GET_ALL_AUTHORS });

  return {
    props: {
      authors: authors.data.authors,
    },
  };
};
