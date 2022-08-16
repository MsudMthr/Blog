import { useQuery } from "@apollo/client";
import { initializeApollo } from "../src/graphQl/apollo";
//queries
import {
  GET_ALL_AUTHORS,
  GET_ALL_BLOGS,
  GET_ALL_CATEGORIES,
} from "../src/graphQl/queries";
//components
import Header from "../src/components/home/header";
import LastArticle from "../src/components/home/lastArticle";
import Packages from "../src/components/home/packages";
import Category from "../src/components/home/category";
import Authors from "../src/components/home/authors";
import Footer from "../src/components/layout/footer";


export default function Home() {
  const blogs = useQuery(GET_ALL_BLOGS);
  const categories = useQuery(GET_ALL_CATEGORIES);
  const authors = useQuery(GET_ALL_AUTHORS);

  if (blogs.loading || categories.loading || authors.loading)
    return <h1>Loading ...</h1>;

  return (
    <div className={""}>
      <Header />
      <LastArticle blogs={blogs.data.posts} />
      <Packages />
      <Category categories={categories.data.categories} />
      <Authors authors={authors.data.authors.slice(0, 3)} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: GET_ALL_BLOGS });
  await apolloClient.query({ query: GET_ALL_CATEGORIES });
  await apolloClient.query({ query: GET_ALL_AUTHORS });
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
    },
  };
}
