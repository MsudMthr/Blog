import React from "react";
import FloatingNavbar from "../../shared/FloatingNavbar";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div className="md:hidden">
        <FloatingNavbar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
