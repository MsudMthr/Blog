import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBlogs = () => {
  return (
    <div className="relative z-50">
      <input
        type="search"
        name=""
        id=""
        placeholder="جستو جوی بلاگ ها"
        className="border-b-2 bg-transparent text-[#d2d2d2] outline-none placeholder:text-xs placeholder:text-[#d2d2d2]"
      />
      <label className="absolute left-0 invert ">
        <SearchIcon />
      </label>
    </div>
  );
};

export default SearchBlogs;
