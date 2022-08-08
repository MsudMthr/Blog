import React from "react";
import Image from "next/image";
import useAOS from "../../../hooks/useAOS";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
const PackageCards = ({ image, header, items }) => {
  useAOS();
  return (
    <div
      className="flex max-h-[330px] flex-1 flex-col bg-milkyWhite p-3 md:w-[400px] md:flex-row"
      data-aos="fade"
      data-aos-duration="1500"
    >
      <Image alt={header} src={image} width={350} height={200} className="" />

      <div className="flex flex-col  items-start justify-between md:w-[280px] ">
        {/* header text package items */}
        <Typography
          component="h5"
          marginRight={1}
          className="text-md text-darkBlue md:text-xl"
        >
          {header}
        </Typography>
        {/* list for package items */}
        <List className="mr-5 list-disc">
          {items.map((item, index) => (
            <li key={index} className="text-xs ">
              {item}
            </li>
          ))}
        </List>
        <button className="self-end text-xs font-thin text-lightBlue ">
          بیشتر
        </button>
      </div>
    </div>
  );
};

export default PackageCards;
