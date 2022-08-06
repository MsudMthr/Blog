import React from "react";
import CategoryCard from "../../../shared/CategoryCard";

const Category = ({ categories }) => {
  return (
    <section className="mx-auto  max-w-screen-md px-2">
      <h1 className="self-start text-2xl font-bold text-darkBlue mb-3">
        دسته بندی ها
      </h1>
      <div className="flex justify-around gap-1 overflow-auto">
        {categories.map((category) => (
          <CategoryCard data={category} key={category.id} />
        ))}
      </div>
    </section>
  );
};

export default Category;
