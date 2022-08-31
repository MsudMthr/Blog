import React from "react";
import Navbar from "@/components/home/header/Navbar";
import Footer from "@/components/layout/footer";
import FloatingNavbar from "@/shared/FloatingNavbar";
const search = () => {
  return (
    <section>
      <div>
        <div className="searchBackground flex min-h-[40vh] items-center justify-center">
          <div className="absolute top-5 right-5 z-50 ">
            <Navbar />
          </div>

          <input
            type="text"
            name=""
            id=""
            className="z-50 w-1/2 rounded-2xl  px-2 py-1 outline-none "
          />
        </div>
      </div>
      <div className="h-[20vh] "></div>
      <Footer />
      <div className="md:hidden">
        <FloatingNavbar />
      </div>
    </section>
  );
};

export default search;
