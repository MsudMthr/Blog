import React from "react";

const NewsLetter = () => {
  return (
    <div className="mb-5 flex flex-col items-center gap-3 md:gap-8 md:mb-0">
      <h5 className="text-lg font-medium">خبرنامه</h5>
      <div className="flex flex-col items-center gap-5">
        <input
          type="email"
          name=""
          id=""
          placeholder="ایمیل خود را وارد کنید"
          className=" w-64 rounded-sm py-2 text-center text-dark outline-none md:w-96"
        />

        <button className="rounded border-2 border-milkyWhite px-2 py-1">
          عضو شدن
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
