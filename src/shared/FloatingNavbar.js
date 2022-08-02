import React, { useState } from "react";
//import icons from material icon
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from '@mui/icons-material/Widgets';

const FloatingNavbar = () => {
  
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  return (
    <div className=" fixed bottom-5 left-3 bg-dark rounded-full w-10 h-10 flex justify-center flex-col z-[999] items-center ">
      {/* button for open or close menu */}
      <button onClick={() => setIsOpenNavbar(!isOpenNavbar)} className="w-10 h-10 rounded-full select-none">
        <WidgetsIcon className="text-white" />
      </button>
      <div
        className={`absolute bottom-10 w-20 text-center transition-all  duration-500 rounded even:delay-150  ${
          isOpenNavbar ? "-left-2" : "-left-32"
        }`}
      >
        {/* menu links  */}
        <div className={`shadow shadow-darkBlue bg-lightBlue rounded my-2 `}>
          <HomeIcon />
        </div>
        <div className={`shadow shadow-darkBlue bg-lightBlue rounded my-2`}>
          <MenuBookIcon />
        </div>
        <div className={`shadow shadow-darkBlue bg-lightBlue rounded my-2`}>
          <PersonIcon />
        </div>
        <div className={`shadow shadow-darkBlue bg-lightBlue rounded my-2`}>
          <CategoryIcon />
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
