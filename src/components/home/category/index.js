import React from "react";
import CategoryCard from "../../../shared/CategoryCard";

const Category = ({categories}) => {
  return (
    <section className="max-w-screen-md mx-auto my-20 ">
      <h1 className="font-bold text-darkBlue text-2xl self-start ">دسته بندی ها</h1>
        {categories.map(category => {
            <CategoryCard data={category} key={category.id} />
        })}
    </section>
  );
};

export default Category;
