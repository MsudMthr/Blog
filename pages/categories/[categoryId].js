import Layout from "@/components/layout/Layout";
import BlogAuthorsCard from "@/shared/BlogAuthorsCard";
import { useRouter } from "next/router";
import { client } from "pages/_app";
import React from "react";
import { GET_ALL_CATEGORIES, GET_CATEGORY_INFO } from "src/graphQl/queries";

const Category = ({ category }) => {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading ...</h1>;
  console.log(category);
  return (
    <Layout>
      <section className="mx-auto my-4 max-w-screen-lg">
        <div className="flex flex-wrap justify-evenly gap-3">
          {category.posts.map((blog) => (
            <BlogAuthorsCard blogData={blog} key={category.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Category;

export const getStaticPaths = async (context) => {
  const { data } = await client.query({
    query: GET_ALL_CATEGORIES,
  });
  console.log(data);
  const paths = await data.categories.map((category) => {
    return {
      params: { categoryId: `${category.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.categoryId;
  const { data } = await client.query({
    query: GET_CATEGORY_INFO,
    variables: { id },
  });

  return {
    props: {
      category: data.category,
    },
  };
};
