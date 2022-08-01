import React from "react";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
const Network = () => {
  return (
    <div className="flex flex-col invert gap-5 items-center md:mr-14 mt-5 z-50 mr-4 ">
      <Instagram />
      <Facebook />
      <Twitter />
      <div className="w-0.5 h-36 bg-[#000] hidden md:block"></div>
    </div>
  );
};

export default Network;
