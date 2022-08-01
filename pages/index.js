import { useQuery } from "@apollo/client";
import Header from "../src/components/home/header";
import LastArticle from "../src/components/home/lastArticle";
import { GET_ALL_BLOGS } from "../src/graphQl/queries";
import { ApolloClient } from "@apollo/client/core";
import { client } from "./_app";


export default function Home({ blogs }) {
  return (
    <div className={""}>
      <Header />
      <LastArticle blogs={blogs} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({query : GET_ALL_BLOGS});
  return {
    props: {
      blogs: data.posts,
    },
  };
}
