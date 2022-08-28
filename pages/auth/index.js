import Login from "@/components/login";
import Register from "@/components/register";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Auth = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  return (
    <div className="auth-background min-h-screen w-full pt-10 transition-all duration-200">
      <div
        className={`absolute top-0 min-h-screen w-full bg-white/30 backdrop-blur-sm transition-all duration-500 md:w-5/12 ${
          router.query.auth === "register" ? "right-0" : "left-0"
        } `}
      >
        {router.query.auth === "register" ? (
          <button
            className=" absolute top-1/4 -left-12 hidden rounded bg-amber-900 py-2 px-3 text-gray-200 transition-all duration-300 hover:-translate-x-4 md:block  "
            onClick={() => router.push("/auth?auth=login")}
          >
            ورود
          </button>
        ) : (
          <button
            className=" absolute top-1/4 -right-16 hidden rounded bg-amber-900 py-2 px-3 text-gray-200 transition-all duration-300 hover:translate-x-4 md:block "
            onClick={() => router.push("/auth?auth=register")}
          >
            ثبت نام
          </button>
        )}
      </div>
      {router.query.auth === "register" && (
        <Register userData={userData} onChange={changeHandler} />
      )}
      {router.query.auth === "login" && (
        <Login userData={userData} onChange={changeHandler} />
      )}
    </div>
  );
};

export default Auth;
