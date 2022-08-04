import Header from "../src/components/home/header";
import LastArticle from "../src/components/home/lastArticle";
import { GET_ALL_BLOGS, GET_ALL_CATEGORIES } from "../src/graphQl/queries";
import { client } from "./_app";
import Packages from "../src/components/home/packages";
import Category from "../src/components/home/category";

export default function Home({ blogs, categories }) {
  console.log(categories);
  return (
    <div className={""}>
      <Header />
      <LastArticle blogs={blogs} />
      <Packages />
      <Category categories={categories} />
    </div>
  );
}

export async function getStaticProps() {
  const AllBlogs = await client.query({ query: GET_ALL_BLOGS });
  const AllCategories = await client.query({ query: GET_ALL_CATEGORIES });
  return {
    props: {
      blogs: AllBlogs.data.posts,
      categories: AllCategories.data.categories,
    },
  };
}
