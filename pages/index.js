import Header from "../src/components/home/header";
import LastArticle from "../src/components/home/lastArticle";
import {
  GET_ALL_AUTHORS,
  GET_ALL_BLOGS,
  GET_ALL_CATEGORIES,
} from "../src/graphQl/queries";
import { client } from "./_app";
import Packages from "../src/components/home/packages";
import Category from "../src/components/home/category";
import Authors from "../src/components/home/authors";

export default function Home({ blogs, categories, authors }) {
  console.log(authors);
  return (
    <div className={""}>
      <Header />
      <LastArticle blogs={blogs} />
      <Packages />
      <Category categories={categories} />
      <Authors authors={authors} />
    </div>
  );
}

export async function getStaticProps() {
  const AllBlogs = await client.query({ query: GET_ALL_BLOGS });
  const AllCategories = await client.query({ query: GET_ALL_CATEGORIES });
  const AllAuthors = await client.query({ query: GET_ALL_AUTHORS });
  return {
    props: {
      blogs: AllBlogs.data.posts,
      categories: AllCategories.data.categories,
      authors: AllAuthors.data.authors,
    },
  };
}
