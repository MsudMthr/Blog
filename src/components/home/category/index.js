import { ArrowBack } from "@mui/icons-material";
import { Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import CategoryHomeCard from "../../../shared/CategoryHomeCard";

const Category = ({ categories }) => {
  return (
    <section className="mx-auto my-10  max-w-screen-md px-2">
      <h1 className="mb-3 self-start text-2xl font-bold text-darkBlue">
        دسته بندی ها
      </h1>
      <div className="flex  items-center justify-around gap-1 ">
        {categories.map((category) => (
          <CategoryHomeCard data={category} key={category.id} />
        ))}
        <button className="mt-3 rounded px-6 py-0.5 font-medium text-lightBlue transition-all duration-300 hover:bg-darkBlue/10 focus:bg-lightBlue focus:text-milkyWhite  ">
          بیشتر <ArrowBack className="hidden md:inline-block" />
        </button>
      </div>
    </section>
  );
};

export default Category;
