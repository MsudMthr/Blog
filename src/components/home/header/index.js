import React from "react";
import Navbar from "./Navbar";
import SearchBlogs from "./SearchBlogs";
import Network from "./Network";
import Banner from "./Banner";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import FloatingNavbar from "../../../shared/FloatingNavbar";
import Image from "next/image";
import logo from "src/assets/blog logo.png";
const Header = () => {
  return (
    <section className="header-background h-[60vh] sm:h-[80vh]  ">
      <div className="absolute top-0 left-0 z-0 h-[60vh] w-[40%]   bg-gradient-to-r from-black via-black/80 to-white/0 sm:h-[80vh]    "></div>
      <div className="z-50 mx-auto flex max-w-screen-xl items-center justify-around">
        <Navbar />
        <div className="z-50 flex w-full items-center justify-around gap-3 md:w-auto ">
          <SearchBlogs />
          <Image src={logo} alt="msud blog" width={60} height={60} />
        </div>
      </div>
      <div className="relative z-50 mx-auto flex h-full max-w-screen-lg items-center justify-between sm:justify-around md:justify-between   ">
        <a
          href="#latest"
          className="absolute bottom-8 left-1/2  z-50 md:bottom-14"
        >
          <KeyboardDoubleArrowDownIcon
            className="animate-ping text-milkyWhite"
            fontSize="medium"
          />
        </a>
        <Network />
        <Banner />
      </div>
      <div className="md:hidden">
        <FloatingNavbar />
      </div>
    </section>
  );
};

export default Header;
