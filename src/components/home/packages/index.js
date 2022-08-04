import React from "react";
import image from "../../../assets/12 Life-Changing Habits You Can Honestly Start Today.png";
import PackageCards from "./PackageCards";
const Packages = () => {
  return (
    <section className="my-20 package-background w-full h-[80vh]  ">
      <div className="max-w-lg mx-auto relative h-[80vh] flex justify-evenly flex-col">
        <h1 className="md:rotate-90 md:absolute text-center -right-36 text-6xl text-milkyWhite font-extrabold drop-shadow-2xl">
          کمپ خوندن
        </h1>
        <div className="md:absolute  md:left-[10%] top-[10%] flex justify-center">
          <PackageCards
            image={image}
            header="لورم ایپسوم متن"
            items={[
              "لورم ایپسوم متن ساختگی ",
              "لورم ایپسوم متن ساختگی ",
              "لورم ایپسوم متن ساختگی ",
            ]}
          />
        </div>
        <div className="md:absolute  md:-left-[30%] md:bottom-[20%] flex justify-center">
          <PackageCards
            image={image}
            header="لورم ایپسوم متن"
            items={[
              "لورم ایپسوم متن ساختگی ",
              "لورم ایپسوم متن ساختگی ",
              "لورم ایپسوم متن ساختگی ",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;
