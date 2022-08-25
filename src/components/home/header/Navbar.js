import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
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
      {session ? (
        <button
          onClick={() => signOut()}
          className="z-40 rounded-md bg-amber-900/60 px-2 py-1 font-bold text-white backdrop-blur-sm"
        >
          خروج از حساب
        </button>
      ) : (
        <button
          onClick={() => signIn("github")}
          className="z-40 rounded-md bg-amber-900/60 px-2 py-1 font-bold text-white backdrop-blur-sm"
        >
          ورود
        </button>
      )}
    </div>
  );
};

export default Navbar;
