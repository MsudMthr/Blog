import Image from "next/image";
import React from "react";
import Navbar from "../../home/header/Navbar";
import SearchBlogs from "../../home/header/SearchBlogs";
import logo from "src/assets/blog logo.png";
const Header = () => {
  return (
    <header className=" sticky  top-0 z-50 mb-1 bg-[#1f313f]/90 py-2 shadow-md shadow-[#1f313f]/50 backdrop-blur">
      <div className="mx-auto  flex max-w-screen-lg items-center md:justify-around">
        <Navbar />
        <div className="flex w-11/12 items-center justify-around md:w-auto md:justify-center">
          <SearchBlogs />
          <Image src={logo} alt="msud blog" width={20} height={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
