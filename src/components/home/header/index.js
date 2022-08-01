import React from "react";
import Navbar from "./Navbar";
import SearchBlogs from "./SearchBlogs";
import Network from "./Network";
import Banner from "./Banner";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const Header = () => {
  return (
    <section className="header-background h-[70vh]  ">
      <div className="h-[70vh] w-[40%] bg-white/5 backdrop-blur-md absolute top-0 left-0 z-0   "></div>
      <div className="flex justify-around items-center z-50 max-w-screen-xl mx-auto">
        <Navbar />
        <div className="flex items-center z-50 gap-3 justify-around w-full md:w-auto ">
          <SearchBlogs />
          <h1 className="text-mono italic font-bold text-[#d5d5d5] mr-3 pt-2">
            Msud Blog
          </h1>
        </div>
      </div>
      <div className="relative max-w-screen-lg mx-auto flex justify-between sm:justify-around md:justify-between items-center z-50 h-full   ">
        <a href="#latest" className="absolute bottom-8 md:bottom-14  left-1/2 z-50">
          <KeyboardDoubleArrowDownIcon className="text-white animate-ping" fontSize="medium"  />
        </a>
        <Network />
        <Banner />
      </div>
    </section>
  );
};

export default Header;
