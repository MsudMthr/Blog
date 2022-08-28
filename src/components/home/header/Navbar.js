import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="z-50 hidden w-96 items-center justify-between pt-4 md:flex ">
      <Link href={"/"}>
        <a className="px-2 py-1 text-milkyWhite drop-shadow-xl">خانه</a>
      </Link>
      <Link href={"/blogs"}>
        <a className="px-2 py-1 text-milkyWhite drop-shadow-xl">مقالات</a>
      </Link>
      <Link href={"/authors"}>
        <a className="px-2 py-1 text-milkyWhite drop-shadow-xl">نویسنده ها</a>
      </Link>
      <Link href={"#"}>
        <a className="px-2 py-1 text-milkyWhite drop-shadow-xl">دسته بندی ها</a>
      </Link>
      {false ? (
        <button
          // onClick={() => signOut()}
          className="z-40 rounded-md bg-amber-900/70 px-2 py-1 font-bold text-white backdrop-blur-sm"
        >
          خروج از حساب
        </button>
      ) : (
        <Link
          href={"/auth?auth=register"}
          // onClick={() => signIn("github")}
        >
          <a className="z-40 rounded-md bg-amber-900/70 px-2 py-1 font-bold text-white backdrop-blur-sm">
            ورود/ثبت نام
          </a>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
