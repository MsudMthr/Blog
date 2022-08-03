import React from "react";
import Image from "next/image";
import useAOS from "../../../hooks/useAOS";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
const PackageCards = ({ image, header, items }) => {
  useAOS();
  return (
    <div className="w-[400px] p-3 flex bg-milkyWhite max-h-[230px]" data-aos="fade-right">
      <Image
        alt={header}
        src={image}
        width={350}
        height={"100px"}
        className=""
      />

      <div className="flex flex-col justify-between items-start w-[280px] ">
        {/* header text package items */}
        <Typography
          variant="h6"
          component="h5"
          marginRight={1}
          className="text-darkBlue"
        >
          {header}
        </Typography>
        {/* list for package items */}
        <List className="list-disc mr-5">
          {items.map((item, index) => (
            <li key={index} className="text-sm ">{item}</li>
          ))}
        </List>
        <button className="self-end text-xs font-thin text-lightBlue ">بیشتر</button>
      </div>
    </div>
  );
};

export default PackageCards;
