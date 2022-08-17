import { client } from "./_app";
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

export default function Home({ blogs, categories, authors }) {
  return (
    <div className={""}>
      <Header />
      <LastArticle blogs={blogs} />
      <Packages />
      <Category categories={categories} />
      <Authors authors={authors.slice(0, 3)} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await client.query({ query: GET_ALL_BLOGS });
  const categories = await client.query({ query: GET_ALL_CATEGORIES });
  const authors = await client.query({ query: GET_ALL_AUTHORS });
  return {
    props: {
      blogs: blogs.data.posts,
      categories: categories.data.categories,
      authors: authors.data.authors,
    },
  };
}
