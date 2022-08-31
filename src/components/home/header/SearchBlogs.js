import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
const SearchBlogs = () => {
  return (
    <div className="relative z-50 mt-4">
      <Link href="/search">
        <a className="rounded-xl bg-slate-600/30 px-6 py-1 text-gray-400 shadow-sm shadow-slate-800 backdrop-blur-sm ">
          <SearchIcon />
          جستجوی مقالات
        </a>
      </Link>
    </div>
  );
};

export default SearchBlogs;
