import React from "react";
import FloatingNavbar from "../../shared/FloatingNavbar";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-lg ">{children}</div>
      <div className="md:hidden">
        <FloatingNavbar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
