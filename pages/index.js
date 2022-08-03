import { useQuery } from "@apollo/client";
import Header from "../src/components/home/header";
import LastArticle from "../src/components/home/lastArticle";
import { GET_ALL_BLOGS } from "../src/graphQl/queries";
import { ApolloClient } from "@apollo/client/core";
import { client } from "./_app";
import Packages from "../src/components/home/packages";


export default function Home({ blogs }) {
  return (
    <div className={""}>
      <Header />
      <LastArticle blogs={blogs} />
      <Packages />
    </div>
  );
}

export async function getStaticProps() {
  const response = await client.query({query : GET_ALL_BLOGS});
  return {
    props: {
      blogs: response.data.posts,
    },
  };
}
