import { ArrowBackIos } from "@mui/icons-material";

const Banner = () => {
  return (
    <div className="z-50 ml-4 md:ml-40">
      <h1 className="text-arial text-justify text-lg font-bold text-milkyWhite md:text-2xl">
        خوندن راحت تر <br /> از اونیه که <br /> فکرشو میکنی
      </h1>
      <button className="mt-3 rounded px-5 py-2  text-milkyWhite ring-1 ring-milkyWhite transition-all hover:-translate-x-3 md:px-10  ">
        مقالات <ArrowBackIos className="transition hover:scale-110" />
      </button>
    </div>
  );
};

export default Banner;
