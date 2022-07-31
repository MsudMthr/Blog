import React from "react";
import Navbar from "./Navbar";
import SearchBlogs from "./SearchBlogs";
import Network from "./Network";
import Banner from './Banner'
const Header = () => {
  return (
    <section className="header-background h-[70vh]">
      <div className="h-[70vh] w-[40%] bg-white/5 backdrop-blur-md absolute top-0 right-0 z-0    "></div>
      <div className="flex justify-around items-center z-50 max-w-screen-xl mx-auto">
      <div className="flex items-center z-50 gap-3 ">
          <h1 className="text-mono italic font-bold text-[#d5d5d5] mr-3 pt-2">Msud Blog</h1>
          <SearchBlogs />
        </div>
        <Navbar />
       
      </div>
      <div className=" max-w-screen-lg mx-auto flex justify-between items-center">
        <Banner />
        <Network />
        
      </div>
    </section>
  );
};

export default Header;
