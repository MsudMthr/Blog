import React from "react";
import Link from "next/link";

const UsefulLink = () => {
  return (
    <div className="mb-5 md:mb-0">
      <h5 className="text-center text-lg font-medium">لینک های کاربردی</h5>
      <ul className="mt-5   flex  items-center gap-4 md:flex-col md:gap-1">
        <li>
          <Link href="#">
            <a>خانه</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>نویسنده ها</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>مقالات</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>دسته بندی ها</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UsefulLink;
