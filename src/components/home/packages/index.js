import React from "react";
import imageCamp1 from "../../../assets/12 Life-Changing Habits You Can Honestly Start Today.png";
import imageCamp2 from "../../../assets/6 of The Most Emotional Books I've Read All Year - The Espresso Edition.png";
import PackageCards from "./PackageCards";
const Packages = () => {
  return (
    <section className="package-background my-20 h-[100vh] w-full  ">
      <div className="relative mx-auto flex h-[100vh] md:max-w-lg flex-col justify-evenly">
        <h1 className="-right-36 text-center text-6xl font-extrabold text-milkyWhite drop-shadow-2xl md:absolute md:rotate-90">
          کمپ خوندن
        </h1>
        <div className="flex flex-row md:flex-col gap-2 relative px-2" >
          <div className="flex  justify-center md:absolute md:top-[20px] md:left-[10%]">
            <PackageCards
              image={imageCamp1}
              header="لورم ایپسوم متن"
              items={[
                "لورم ایپسوم متن ساختگی ",
                "لورم ایپسوم متن ساختگی ",
                "لورم ایپسوم متن ساختگی ",
              ]}
            />
          </div>
          <div className="flex  justify-center md:absolute md:-left-[20%] md:bottom-[20%]">
            <PackageCards
              image={imageCamp2}
              header="لورم ایپسوم متن"
              items={[
                "لورم ایپسوم متن ساختگی ",
                "لورم ایپسوم متن ساختگی ",
                "لورم ایپسوم متن ساختگی ",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
