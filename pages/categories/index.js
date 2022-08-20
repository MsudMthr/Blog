import Layout from "@/components/layout/Layout";
import CategoryCard from "@/shared/Category";
import { client } from "pages/_app";
import React from "react";
import { GET_ALL_CATEGORIES } from "src/graphQl/queries";

const Categories = ({ categories }) => {
  return (
    <Layout>
      <section className="mx-auto  my-4 max-w-screen-lg">
        <h1 className="mr-2 text-xl font-bold text-darkBlue sm:mr-20">
          دسته بندی ها
        </h1>
        <div className="my-2 flex flex-wrap justify-center gap-3 px-2 md:px-0">
          {categories?.map((category) => (
            <CategoryCard key={category.categorySlug} data={category} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Categories;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ALL_CATEGORIES,
  });

  return {
    props: {
      categories: data.categories,
    },
  };
};
