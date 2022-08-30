import React from "react";
import Button from "@mui/material/Button";
import { GitHub } from "@mui/icons-material";
import googleIcon from "/src/assets/google-svgrepo-com.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { setCookie } from "src/helper/coockies";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";

const Login = ({ userData, onChange }) => {
  const router = useRouter();

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        setCookie("userToken", res.user.uid, 1);
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className=" left-16  top-10   mx-auto flex min-h-[80vh] w-11/12 max-w-md flex-col items-center rounded-md bg-gray-500/30  px-2 py-1 text-center shadow-md shadow-gray-900/80 backdrop-blur-md transition-all duration-200 md:absolute md:w-4/12">
      <h1 className="mt-2 text-xl font-bold text-gray-200">ورود</h1>
      <div className="mt-5 flex w-8/12 flex-col items-start justify-center">
        <label
          className="text-lg font-medium text-[#1b271b] "
          htmlFor="userName"
        >
          ایمیل
        </label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => onChange(e)}
          name="email"
          id="userName"
          className="w-full rounded border border-slate-500 bg-transparent  px-3 py-2 text-gray-200 shadow-sm shadow-gray-600 outline-none transition-all duration-200 focus:border-gray-700  focus:shadow-md focus:shadow-gray-900 focus:ring-1 "
        />
      </div>
      <div className="my-5  flex w-8/12 flex-col items-start justify-center">
        <label
          className="text-lg font-medium text-[#1b271b] "
          htmlFor="password"
        >
          گذرواژه
        </label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => onChange(e)}
          name="password"
          id="password"
          className="w-full rounded border border-slate-500 bg-transparent  px-3 py-2 text-gray-200 shadow-sm shadow-gray-600 outline-none transition-all duration-200 focus:border-gray-700  focus:shadow-md focus:shadow-gray-900 focus:ring-1 "
        />
      </div>
      <Button variant="contained" color="primary" onClick={loginHandler}>
        ورود
      </Button>
      <div className="mt-5 flex w-11/12 flex-col flex-wrap items-center justify-around gap-2 md:flex-row ">
        <button className="flex  w-full flex-1 items-center justify-center rounded bg-dark/80 py-2">
          <GitHub />
        </button>
        <button className="flex w-full flex-1 items-center justify-center rounded bg-blue-600/80 py-2">
          <Image src={googleIcon} alt="google" width={24} height={24} />
        </button>
        <button
          className="flex-3 w-full rounded bg-gray-200/80 py-2 text-center md:hidden "
          onClick={() => router.push("/auth?auth=register")}
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Login;
