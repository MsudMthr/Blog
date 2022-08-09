import Contact from "./Contact";
import NewsLetter from "./NewsLetter";
import UsefulLink from "./UsefulLink";
const Footer = () => {
  return (
    <section className="  min-h-[40vh]  bg-dark py-5 text-milkyWhite ">
      <div className="mx-auto  flex max-w-screen-lg flex-col items-center justify-around md:flex-row">
        <UsefulLink />
        <span className="mb-1 h-0.5 w-8/12 bg-milkyWhite/30 md:hidden"></span>
        <NewsLetter />
        <span className="mb-1 h-0.5 w-8/12 bg-milkyWhite/30 md:hidden"></span>
        <Contact />
      </div>
    </section>
  );
};

export default Footer;
