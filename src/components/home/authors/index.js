import React from "react";
import AuthorCard from "../../../shared/AuthorCard";
const Authors = ({ authors }) => {
  return (
    <section className="mx-auto  max-w-screen-md px-2">
      <h1 className="mb-3 self-start text-2xl font-bold text-darkBlue">
        نویسنده ها
      </h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </section>
  );
};

export default Authors;
