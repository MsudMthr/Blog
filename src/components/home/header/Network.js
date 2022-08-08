import React from "react";
import { Twitter, Instagram, Facebook } from "@mui/icons-material";

const Network = () => {
  return (
    <div className="z-50 mt-5 mr-4 flex flex-col items-center gap-5 invert md:mr-14 ">
      <Instagram />
      <Facebook />
      <Twitter />
      <div className="hidden h-36 w-0.5 bg-[#000] md:block"></div>
    </div>
  );
};

export default Network;
