import { ArrowBackIos } from "@mui/icons-material";

const Banner = () => {
  return (
    <div className="z-50 ml-4 md:ml-40">
      <h1 className="text-milkyWhite font-bold text-lg md:text-2xl text-justify text-arial">
        خوندن راحت تر <br /> از اونیه که <br /> فکرشو میکنی
      </h1>
      <button className="ring-1 text-milkyWhite hover:-translate-x-3 transition-all  ring-milkyWhite px-5 md:px-10 mt-3 py-2 rounded  ">
        مقالات <ArrowBackIos className="hover:scale-110 transition" />
      </button>
    </div>
  );
};

export default Banner;
