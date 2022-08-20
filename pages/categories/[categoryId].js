import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { client } from "pages/_app";
import React from "react";
import { GET_ALL_CATEGORIES, GET_CATEGORY_INFO } from "src/graphQl/queries";

const Category = ({ category }) => {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading ...</h1>;

  return (
    <Layout>
      <section className="mx-auto my-4 max-w-screen-lg">
        <div className=""></div>
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
