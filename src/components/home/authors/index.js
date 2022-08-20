import React from "react";
import AuthorHomeCard from "../../../shared/AuthorHomeCard";
import { ArrowBack } from "@mui/icons-material";
const Authors = ({ authors }) => {
  return (
    <section className="bg-amber-100/20 py-5">
      <div className="mx-auto  max-w-screen-md px-2 ">
        <h1 className="mb-3 self-start text-2xl font-bold text-darkBlue">
          نویسنده ها
        </h1>
        <div className="flex items-center justify-around gap-2 ">
          {authors.map((author) => (
            <AuthorHomeCard key={author.id} author={author} />
          ))}
          <button className="mt-3 rounded px-6 py-0.5 text-sm text-lightBlue transition-all duration-300  hover:bg-darkBlue/10 focus:bg-lightBlue focus:text-milkyWhite md:text-base md:font-medium  ">
            بیشتر <ArrowBack className="hidden md:inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Authors;
